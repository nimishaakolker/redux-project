const ResultCard = ({ item }) => {
const addToCollection = (item) => {
  console.log(item);

  const oldData = JSON.parse(localStorage.getItem('collection')) || []

  const newData = [...oldData, item]
 localStorage.setItem('collection', JSON.stringify(newData))
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
          addToCollection(item)
        }}
        className="rounded bg-emerald-800 px-3 py-2 text-white active:scale-95">Save</button>
      </div>
    </div>
  )
}

export default ResultCard
