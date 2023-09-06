async function RightSideBar() {
    return (
        <section className='custom-scrollbar rightsidebar'>
            {/* COMMUNITY */}
            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                    Suggested Communities
                </h3>

                <div className='mt-7 flex w-[350px] flex-col gap-9'>

                </div>
            </div>

            {/* SIMILAR MINDS */}
            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
                <div className='mt-7 flex w-[350px] flex-col gap-10'>

                </div>
            </div>

        </section>
    )
}

export default RightSideBar