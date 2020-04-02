import { fetchProductSuccess } from '../actions/homeAction';
import vang1 from '../images/vang1.jpg';
import vang2 from '../images/vang2.jpg';
import vang3 from '../images/vang3.jpg';
import vang4 from '../images/vang4.jpg';
import bac1 from '../images/bac1.jpg';
import bac2 from '../images/bac2.jpg';
import bac3 from '../images/bac3.jpg';
import bac4 from '../images/bac4.jpg';
import trangsuc3 from '../images/trangsuc3.jpg';
import trangsuc4 from '../images/trangsuc4.jpg';
import daquy1 from '../images/daquy1.jpg';
import daquy2 from '../images/daquy2.jpg';
import daquy3 from '../images/daquy3.jpg';
import daquy4 from '../images/daquy4.jpg';




const fakeProducts = [
    {
        catId: 0,
        img: vang1,
        name: 'Vàng chất lượng cao đến từ hàng xẻng',
    },
    {
        catId: 0,
        img: vang2,
        name: 'Vàng chất lượng cao đến từ hàng xẻng',
    },
    {
        catId: 0,
        img: vang3,
        name: 'Vàng chất lượng cao đến từ hàng xẻng',
    },
    {
        catId: 0,
        img: vang4,
        name: 'Vàng chất lượng cao đến từ hàng xẻng',
    },
    {
        catId: 2,
        img: bac1,
        name: 'Nhẫn bạc chất lượng cao cấp',
    },
    {
        catId: 2,
        img: bac2,
        name: 'Nhẫn bạc chất lượng cao cấp',
    },
    {
        catId: 2,
        img: bac3,
        name: 'Nhẫn bạc chất lượng cao cấp',
    },
    {
        catId: 2,
        img: bac4,
        name: 'Nhẫn bạc chất lượng cao cấp',
    },
    {
        catId: 1,
        img: trangsuc3,
        name: 'Trang sức chất lượng cao cấp',
    },
    {
        catId: 1,
        img: trangsuc4,
        name: 'Trang sức chất lượng cao cấp',
    },
    {
        catId: 1,
        img: trangsuc3,
        name: 'Trang sức chất lượng cao cấp',
    },
    {
        catId: 1,
        img: trangsuc4,
        name: 'Trang sức chất lượng cao cấp',
    },
    {
        catId: 3,
        img: daquy1,
        name: 'Trang sức đá quý cao cấp',
    },
    {
        catId: 3,
        img: daquy2,
        name: 'Trang sức đá quý cao cấp',
    },
    {
        catId: 3,
        img: daquy3,
        name: 'Trang sức đá quý cao cấp',
    },
    {
        catId: 3,
        img: daquy4,
        name: 'Trang sức đá quý cao cấp',
    }
];

export default function fetchHomeProducts() {
    return dispatch => {
        dispatch(fetchProductSuccess(fakeProducts));
        return fakeProducts;
    }
}