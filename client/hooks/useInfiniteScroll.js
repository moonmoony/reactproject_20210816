import { useRef, useState, useEffect, useCallback } from 'react'

const useInfiniteScroll = targetEl => {
    const observerRef = useRef(null)
    const [intersecting, setIntersecting] = useState(false)

    /* getObserver로 인해 주석처리됨
    const observer = new IntersectionObserver(entries => setIntersecting(
        entries.some(entry => entry.isIntersecting) //intersecting 한 것이 하나라도 있으면 setIntersecting을 true로 지정 아니면 false
    ))
    */

    const getObserver = useCallback(() => {
        if (!observerRef.current) {
            observerRef.current = new IntersectionObserver(entries => setIntersecting(
                entries.some(entry => entry.isIntersecting)
            ))
        }
        return observerRef.current
    }, [observerRef.current]) //observerRef.current가 바뀔때만 변경사항을 감지하도록 처리

    //observer로 감시할 대상을 즉 target을 지정해주는 작업
    useEffect(() => {
        if (targetEl.current) getObserver().observe(targetEl.current)

        return () => {
            getObserver().disconnect()
        }
    }, [targetEl.current])

    return intersecting
}

export default useInfiniteScroll 