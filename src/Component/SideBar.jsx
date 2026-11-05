import { Search } from 'lucide-react';
import { BsSearchHeartFill } from 'react-icons/bs';
import { MdFavorite} from 'react-icons/md';
import { RiHome6Fill, RiInboxArchiveFill} from 'react-icons/ri';
import { motion } from 'motion/react';
function SideBar(){
    return(
        <div className='sticky top-0 z-100 w-23'>
            <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
        className='flex flex-col w-23 min-h-screen pt-5 border-r border-gray-400 gap-10 bg-white'>
            <div className='flex flex-col items-center group'>
                <Search size={30} strokeWidth={4} className='text-gray-700 hover:text-blue-700 cursor-pointer group'/>
                <p className=' text-gray-700 select-none'>Search</p>
            </div>
            <div className='flex flex-col items-center '>
                <BsSearchHeartFill size={30} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className=' text-gray-700 select-none'>Updates</p>
            </div>
            <div className='flex flex-col items-center'>
                <MdFavorite size={30} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className=' text-gray-700 select-none'>Search</p>
            </div>
            <div className='flex flex-col items-center'>
                <RiHome6Fill size={30} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className=' text-gray-700 select-none'>Plan</p>
            </div>
            <div className='flex flex-col items-center'>
                <RiInboxArchiveFill size={30} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className=' text-gray-700 select-none'>Inbox</p>
            </div>
        </motion.div>
        </div>
    )
}
export default SideBar;