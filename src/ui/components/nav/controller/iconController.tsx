import { AiFillHome } from "react-icons/ai";
import { LiaUserSolid } from 'react-icons/lia'
import { FaWpforms } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";



export const NavBarMenuIconsController: Record<string, JSX.Element> = {
    "home" : <AiFillHome />,
    "forms" : <FaWpforms />,
    "formsAll": <FaWpforms />,
    "censadores" : <LiaUserSolid />,
    "establishment": <MdOutlineMapsHomeWork />
  }