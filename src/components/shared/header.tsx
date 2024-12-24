import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex justify-end border-b pb-5 px-5'>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center border gap-3 w-[25rem] p-2 rounded-lg">
                    <svg width="15" height="15" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.6257" cy="13.6257" r="12.6257" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.407 23.0629L27.357 28.0001" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input 
                        type="text" 
                        className="font-light bg-transparent outline-none border-none w-full" 
                        placeholder='Search' 
                    />
                </div>
                <svg className='ml-7' width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5767 6.3125C16.5767 5.71803 16.0947 5.23611 15.5003 5.23611C14.9058 5.23611 14.4239 5.71803 14.4239 6.3125V6.92698C10.7726 7.44909 7.96555 10.5882 7.96555 14.3842L7.96555 18.6902C7.96555 18.6902 7.96556 18.6901 7.96555 18.6902C7.96544 18.6923 7.96471 18.7067 7.96004 18.735C7.95444 18.7689 7.94449 18.815 7.92807 18.8743C7.89478 18.9945 7.8418 19.1442 7.76778 19.3212C7.61939 19.676 7.41018 20.0845 7.1788 20.4967C6.74379 21.2716 6.52451 22.1951 6.68913 23.0732C6.86273 23.9993 7.45883 24.8069 8.4769 25.1945C9.38635 25.5408 10.5969 25.8575 12.1956 26.046C12.2336 26.0789 12.2786 26.1167 12.3303 26.158C12.4921 26.2874 12.7232 26.4552 13.0153 26.6221C13.595 26.9533 14.4521 27.3021 15.5003 27.3021C16.5484 27.3021 17.4056 26.9533 17.9853 26.6221C18.2774 26.4552 18.5085 26.2874 18.6702 26.158C18.7219 26.1167 18.7669 26.0789 18.8049 26.046C20.4036 25.8575 21.6142 25.5408 22.5236 25.1945C23.5417 24.8069 24.1378 23.9993 24.3114 23.0732C24.476 22.1951 24.2568 21.2716 23.8217 20.4967C23.5904 20.0845 23.3811 19.676 23.2328 19.3212C23.1587 19.1442 23.1058 18.9945 23.0725 18.8743C23.056 18.815 23.0461 18.7689 23.0405 18.735C23.0358 18.7067 23.0351 18.6925 23.035 18.6905C23.035 18.6903 23.035 18.6905 23.035 18.6905L23.035 18.6814V14.3848C23.035 10.5888 20.228 7.44918 16.5767 6.92699V6.3125ZM10.1183 14.3842C10.1183 11.4121 12.5276 9.00348 15.5003 9.00348C18.4728 9.00348 20.8822 11.4125 20.8822 14.3848V18.691C20.8822 19.1893 21.0689 19.7267 21.2467 20.1518C21.4398 20.6135 21.6928 21.1021 21.9445 21.5505C22.1893 21.9865 22.2476 22.3985 22.1955 22.6766C22.1523 22.9067 22.0373 23.0762 21.7576 23.1827C20.6006 23.6232 18.6476 24.0729 15.5003 24.0729C12.353 24.0729 10.3999 23.6232 9.24295 23.1827C8.96324 23.0762 8.8482 22.9067 8.80505 22.6766C8.75292 22.3985 8.81128 21.9865 9.05603 21.5505C9.30773 21.1021 9.56079 20.6135 9.75388 20.1518C9.93162 19.7267 10.1183 19.1893 10.1183 18.691V14.3842Z" fill="#667185"/>
                </svg>

                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.04164 19.2292C8.44717 19.2292 7.96525 18.7473 7.96525 18.1528C7.96525 17.5583 8.44717 17.0764 9.04164 17.0764C9.63611 17.0764 10.118 17.5583 10.118 18.1528C10.118 18.7473 9.63611 19.2292 9.04164 19.2292Z" fill="#667185"/>
                    <path d="M12.2708 18.1528C12.2708 18.7473 12.7527 19.2292 13.3472 19.2292C13.9417 19.2292 14.4236 18.7473 14.4236 18.1528C14.4236 17.5583 13.9417 17.0764 13.3472 17.0764C12.7527 17.0764 12.2708 17.5583 12.2708 18.1528Z" fill="#667185"/>
                    <path d="M17.6528 19.2292C17.0583 19.2292 16.5764 18.7473 16.5764 18.1528C16.5764 17.5583 17.0583 17.0764 17.6528 17.0764C18.2472 17.0764 18.7291 17.5583 18.7291 18.1528C18.7291 18.7473 18.2472 19.2292 17.6528 19.2292Z" fill="#667185"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.6256 17.5586L21.9544 17.8925C21.957 17.979 21.9583 18.0657 21.9583 18.1528C21.9583 22.9086 18.103 26.7639 13.3472 26.7639C12.6358 26.7639 11.9431 26.6774 11.2797 26.5138L6.65245 25.9354C5.51438 25.7932 4.72346 24.7323 4.91202 23.601L5.19585 21.898L4.98614 20.2202C4.82259 19.5569 4.73608 18.8642 4.73608 18.1528C4.73608 13.397 8.59141 9.54167 13.3472 9.54167C13.4695 9.54167 13.5912 9.54422 13.7123 9.54927C14.5968 7.03739 16.9896 5.23611 19.8055 5.23611C23.3724 5.23611 26.2639 8.12761 26.2639 11.6944C26.2639 12.2213 26.2006 12.7347 26.0807 13.2271L25.9386 14.3632L26.134 15.5355C26.2974 16.5159 25.612 17.4354 24.6256 17.5586ZM19.8055 7.38889C22.1834 7.38889 24.1111 9.31656 24.1111 11.6944C24.1111 12.0648 24.0646 12.4227 23.9776 12.7633L23.9609 12.8289L23.7952 14.1546C23.7742 14.3224 23.7777 14.4923 23.8055 14.6591L23.9414 15.4746L21.6228 15.7645C20.8199 12.9775 18.6474 10.7709 15.8809 9.92047C16.557 8.42715 18.061 7.38889 19.8055 7.38889ZM13.3472 11.6944C9.78036 11.6944 6.88886 14.5859 6.88886 18.1528C6.88886 18.7074 6.95854 19.2443 7.08906 19.7557L7.10579 19.8212L7.33444 21.6504C7.35864 21.844 7.35464 22.0401 7.32257 22.2325L7.05854 23.8167L11.6788 24.3942L11.7443 24.4109C12.2557 24.5414 12.7925 24.6111 13.3472 24.6111C16.914 24.6111 19.8055 21.7196 19.8055 18.1528C19.8055 14.5859 16.914 11.6944 13.3472 11.6944Z" fill="#667185"/>
                </svg>

                <div className="flex items-center gap-">
                    <Image src="/images/profile-head.svg" width={30} height={30} alt="profile" className='rounded-full' />
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
