import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice';


const Tabs = () => {
    const dispatch = useDispatch();
    
    const activeTab = useSelector((state) => state.search.activeTab)
    const tabs = ['photos', 'videos']
    return (
        <div className='flex gap-4 p-6'>
            {tabs.map(function (elem, idx) {
                return (
                    <button
                        className={`${(activeTab === elem ? 'bg-emerald-600' : 'bg-gray-500')} w-28 h-10 transition border rounded cursor-pointer active:scale-95 uppercase text-sm font-medium`}
                        key={idx}

                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}</button>
                )
            })}
        </div>
    )
}

export default Tabs
