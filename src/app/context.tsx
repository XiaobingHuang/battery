import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import request from "@/service/requests";
import ConfirmPopup from "@/components/ConfirmPopup";
import TopLoadingBar from "@/components/TopLoadingBar";
import {merge} from "lodash";

export const AppContext = createContext(null)

export const useAppContext = () => {
    return useContext(AppContext)
}

type ConfirmPopupProps = {
    title: string
    message: string
    fields: any[],
    onConfirm: () => any
    onCancel: () => any
}

export default function AppContextProvider({children}) {
    const [currentBeId, setCurrentBeId] = useState(null)
    const [isInitialLoad, setIsInitialLoad] = useState(true)
    const [showTopLoading, setShowTopLoading] = useState(false)
    const [pagePresetFilter, setPagePresetFilter] = useState({})
    const [confirmPopup, setConfirmPopup] = useState([false, {
        title: "",
        message: "",
        fields: [],
        onConfirm: () => {
        },
        onCancel: () => {
        }
    }])

    const startTopLoading = () => {
        setShowTopLoading(true)
    }
    const completeTopLoading = () => {
        setShowTopLoading(false)
    }

    const handleShowConfirmPopup = (popup: ConfirmPopupProps) => {
        setConfirmPopup([true, popup])
    }

    const handleHideConfirmPopup = () => {
        setConfirmPopup([false, {
            title: "",
            message: "",
            fields: [],
            onConfirm: () => {
            },
            onCancel: () => {
            }
        }])
    }

    const handleSetPagePresetFilter=(page,filter) => {
        setPagePresetFilter( prev => {
            const merged = merge({}, prev)
            merged[page] = filter
            return {...merged}
        })
    }
    const handleClearPagePresetFilter=(page) => {
        setPagePresetFilter( prev => {
            const merged = merge({}, prev)
            delete merged[page]
            return {...merged}
        })
    }


    useEffect(() => {
        request({
            // contentType:"text/plain",
            url: "/uiserver/Navigation/GetNavigationContext",
            method: "GET",
            data: {},
            headers: {
                'Content-Type': 'text/plain'
            },
            mock: [200, {currentBeId: 122}]
        }).then((res: any) => {
            if (res.data.currentBeId) {
                setCurrentBeId(res.data.currentBeId)
            }
            setIsInitialLoad(false)
        })

    }, [])

    const ctx = {
        currentBeId,
        handleShowConfirmPopup,
        handleHideConfirmPopup,
        startTopLoading,
        completeTopLoading,
        handleSetPagePresetFilter,
        handleClearPagePresetFilter,
        pagePresetFilter
    }

    //@ts-ignore
    const popup: ConfirmPopupProps = useMemo(() => {
        return confirmPopup[1]
    }, [confirmPopup])


    if (isInitialLoad) {
        return null
    }


    return <AppContext.Provider value={ctx}>
        {children}
        <ConfirmPopup
            title={popup.title}
            message={popup.message}
            fields={popup.fields}
            onConfirm={popup.onConfirm}
            onCancel={handleHideConfirmPopup}
            show={confirmPopup[0]}/>
        <TopLoadingBar start={showTopLoading} />
    </AppContext.Provider>

}