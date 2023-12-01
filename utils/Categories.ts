import { MdStorefront } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { LiaRunningSolid } from "react-icons/lia";
import { FaRunning } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";

export const categories = [
  {
    label: 'All',
    icon: MdStorefront
  },
  {
    label: 'Men',
    icon: FaMale
  },
  {
    label: 'Women',
    icon: FaFemale
  },
  {
    label: 'Accessories',
    icon: FcSportsMode
  }
]

export const eventCategories = [
  {
    label: 'short',
    icon: LiaRunningSolid
  },
  {
    label: 'medium',
    icon: FaRunning
  },
  {
    label: 'Long',
    icon: GiRunningNinja
  },
]
























