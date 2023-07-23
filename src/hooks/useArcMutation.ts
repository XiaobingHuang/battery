import { useMutation } from 'react-query';
import { useNotification } from '@arctrade/relay';
import {  APIERROR, APIWARNING } from '@/app/configs';
import {useNavigate} from "react-router";

function useArcMutation<TVariables, TData = any>(mutationFn?, options: any = {}) {
    //To use there must be a notification provider as a parent in the app
    const notification = useNotification();
    const errorFun = options.onError;

    options.onError = (err) => {
        if (err.response) {
            const status = err.response.status;
            if (status === 401) {
                // window.location.href = window.location.origin+"/app/login"
            } else if (status === 403) {
                notification.addError({
                    title: 'Unauthorized',
                    message: 'It looks like you dont have the required permissions to access this resource. If you believe you are seeing this message in error, please contact your admin.',
                });
            } else {
                notification.addError({
                    title: `Network Error: ${status}`,
                    message: err.response.statusText || '',
                });
            }
        } else if (err.name === APIERROR || err.name === APIWARNING) {
            // console.log('skip', err);
        } else {
            notification.addError({
                title: 'Network Error',
                message: 'Network Error',
            });
        }
        if (errorFun) {
            errorFun(err);
        }
    };

    return useMutation<TData, unknown, TVariables>(async (submitData: TVariables) => {
        try {
            // axios response
            // console.log(`[MUTATION START]`, submitData);
            const response = await mutationFn(submitData);
            let data,
                totalCount,
                errors = [],
                warnings = [];

            if (typeof response.data === 'object') {
                data = response.data.data;
                totalCount = response.data.totalCount;
                errors = response.data.errors;
                warnings = response.data.warnings;
            } else {
                data = { data: response.data };
            }

            if (errors.length > 0) {
                const error = errors[0];
                const { key = '', message = '' } = error;
                if (!options.bypassErrorNotifications) {
                    notification.addBanner({
                        title: `Error: ${key}`,
                        message: message,
                        type:"error",
                        hideAfter: 2000
                    });
                }
                const err = new Error();
                err.name = APIERROR;
                err.message = message;
                throw err;
            }
            if (warnings.length > 0) {
                const warning = warnings[0];
                const { key = '', message = '' } = warning;
                if (!options.bypassErrorNotifications) {
                    notification.addBanner({
                        title: `Error: ${key}`,
                        message: message,
                        type:"error",
                        hideAfter: 2000
                    });
                }
                const err = new Error();
                err.name = APIWARNING;
                err.message = message;
                throw err;
            }

            // console.log(`[MUTATION SUCCESS]`, data);
            return data;
        } catch (error) {
            // The business logic handles the error itself
            throw error;
        }
    }, options);
}

export default useArcMutation;
