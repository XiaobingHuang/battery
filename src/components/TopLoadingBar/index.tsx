import React, {useEffect, useState} from 'react'
import LoadingBar from 'react-top-loading-bar'

const TopLoadingBar = ({start}) => {
    const [progress, setProgress] = useState(0)
    const [mounted, setMounted] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    const updateProgress = () => {
        setProgress(prev => {
            if(prev < 50){
                return prev + 10
            } else if( prev < 75){
                return prev + 5
            } else if(prev <95){
                return prev + 0.5
            }
        })
    }


    useEffect(() => {
        let interval
        if(!mounted){
            setMounted(true)
             return
        }
        if(start &&progress <100){
            return
        }
        if(start){
            setProgress(10)
            const intervalId = setInterval(updateProgress, 500)
            setIntervalId(intervalId)
        } else  {
            setProgress(100)
            clearInterval(intervalId)
        }


    }, [start])
    useEffect(() => {
        if(progress === 100){
            setTimeout(() => {
                setProgress(0)
            }, 100)
        }
    }, [progress])

    return (<LoadingBar
                color='#987fbf'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
    )
}

export default TopLoadingBar