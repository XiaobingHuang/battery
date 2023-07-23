import { useQuery } from "react-query";
import { useNotification } from "@arctrade/relay";
import { APIERROR, APIWARNING } from "@/app/configs";

function useArcQuery<T>(
  queryKey,
  queryFn?,
  options: any = {
    retry: false,
  }
) {
  //To use there must be a notification provider as a parent in the app
  const queryName = (
    typeof queryKey === "string" ? queryKey : queryKey[0]
  ).toUpperCase();
  const notification = useNotification();
  const errorFun = options.onError;
  options.onError = (err) => {
    if (err.response) {
      const status = err.response.status;
      if (status === 401) {
        const currentPath = window.location.origin + window.location.pathname;
        // window.location.href = LoginUrl + '?redirectUrl=' + currentPath;
      } else if (status === 403) {
        notification.addError({
          title: "Unauthorized",
          message:
            "It looks like you dont have the required permissions to access this resource. If you believe you are seeing this message in error, please contact your admin.",
        });
      } else {
        notification.addError({
          title: `Network Error: ${status}`,
          message: err.response.statusText || "",
        });
      }
    } else if (err === APIERROR || err === APIWARNING) {
      // console.log('skip', err);
    } else {
      notification.addError({
        title: "Network Error",
        message: "Network Error",
      });
    }
    if (errorFun) {
      errorFun(err);
    }
  };

  return useQuery<T>(
    queryKey,
    async (...args) => {
      try {
        // axios response
        // const { data, errors = [], warnings = [] } = await queryFn(...args);
        // console.log(`[QUERY START] ${queryName}`, queryKey[1]);
        const response = await queryFn(...args);
        const {
          data,
          totalCount = 0,
          errors = [],
          warnings = [],
        } = response.data;

        // Show errors, warnings
        // console.log('errors', errors);
        // console.log('warnings', warnings);
        if (errors.length > 0) {
          const error = errors[0];
          const { key = "", message = "" } = error;
          notification.addError({
            title: `API Error: ${key}`,
            message: message,
          });
          throw APIERROR;
        }
        if (warnings.length > 0) {
          const warning = warnings[0];
          const { key = "", message = "" } = warning;
          notification.addError({
            title: `API Warning: ${key}`,
            message: message,
          });
          throw APIWARNING;
        }

        // console.log(`[QUERY SUCCESS] ${queryName}`, data);
        return data;
      } catch (error) {
        // The business logic handles the error itself
        throw error;
      }
    },
    options
  );
}

export default useArcQuery;
