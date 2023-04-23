export const Loader = () => {
  return (
    <div
      className='inline-block w-full h-full animate-spin rounded-full border-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
      role='status'
    >
      <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]' />
    </div>
  )
}
