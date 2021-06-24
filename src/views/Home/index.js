/**
 * React Hook
 * 不编写 class 的情况下使用 state 以及其他的 React 特性
 */

import { useEffect, useState } from 'react'


function Home() {
    const [count, setCout] = useState(0)
    const [name, setName] = useState('HUA')

    // seEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
    useEffect(() => {
        let cutdownTiem = 0
        let timer = setInterval(() => {
            cutdownTiem += 1
            console.log(cutdownTiem)
        }, 1000);

        // 这里是清楚函数，会在组件卸载前执行
        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div onClick={() => setCout(count + 1)}>hello {count}</div>
    )
}

export default Home