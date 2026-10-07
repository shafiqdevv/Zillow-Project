import { Search } from 'lucide-react';
import { BsSearchHeartFill } from 'react-icons/bs';
import { MdFavorite} from 'react-icons/md';
import { RiHome6Fill, RiHomeFill, RiInboxArchiveFill} from 'react-icons/ri';
function NavSide(){
    return(
        <div className='flex flex-col w-17 min-h-screen pt-5 border-r border-gray-400 gap-5'>
            <div className='flex flex-col items-center gap-1 group'>
                <Search size={20} strokeWidth={4} className='text-gray-700 hover:text-blue-700 cursor-pointer group'/>
                <p className='text-xs text-gray-700'>Search</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <BsSearchHeartFill size={20} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className='text-xs text-gray-700'>Updates</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <MdFavorite size={20} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className='text-xs text-gray-700'>Search</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <RiHome6Fill size={20} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className='text-xs text-gray-700'>Plan</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <RiInboxArchiveFill size={20} className='text-gray-700 hover:text-blue-700 cursor-pointer'/>
                <p className='text-xs text-gray-700'>Inbox</p>
            </div>
        </div>
    )
}
export default NavSide;