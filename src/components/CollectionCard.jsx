import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
    return (
        <div className="relative w-full max-w-sm overflow-hidden rounded-xl overflow-hidden bg-white">
            <a target="_blank" rel="noreferrer" className="block" href={item.url}>
                <div className="aspect-[5/5] w-full overflow-hidden bg-black">
                    {item.type == 'photo' ? (
                        <img
                            className="h-full w-full object-cover object-center"
                            src={item.src}
                            alt={item.title || 'photo'}
                        />
                    ) : (
                        ''
                    )}
                    {item.type == 'video' ? (
                        <video
                            className="h-full w-full object-cover object-center"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            poster={item.thumbnail}
                            src={item.src}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </a>

            <div
                id="bottom"
                className="absolute bottom-0 gap-3 flex w-full cursor-pointer items-center justify-between px-4 py-6 text-white"
            >
                <h1 className="text-lg font-semibold h-10 capitalize">{item.title}</h1>

                <button onClick={() => {
                    removeFromCollection(item)
               
                }}
                    className="rounded bg-emerald-800 px-3 py-2 text-white active:scale-95">Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard
