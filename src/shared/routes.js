import Home from "./Home/Home";
import AddProduct from "./AddProduct/AddProduct";
import SearchProduct from "./SearchProduct/SearchProduct";
import ScheduleProduct from "./ScheduleProduct/ScheduleProduct";


const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/addProduct",
        component: AddProduct
    },
    {
        path: "/searchProduct",
        component: SearchProduct
    },
    {
        path: "/scheduleProduct",
        component: ScheduleProduct
    }
];

export default routes;