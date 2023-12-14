interface PropType {
  [key: string]: string;
}

let props: PropType;

type DataType = {
    title: string
}

interface DataType1 {
    title: string
}

const data: DataType = { title: '订单页面' }
const data1: DataType1 = { title: '订单页面' }

props = data

props = data1
