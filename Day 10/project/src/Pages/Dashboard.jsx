import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Assets/css/Dashboard.css';

function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className='main'>
    <Sidebar/>
    <div className="dashboard-container">
      <h1 className='text-info'>Dashboard</h1>
      <div className="polls1">
        <div className='d1'>
            <div className='con'>
            <h2 className='text-primary'>No. of Candidates</h2>
            <h3>5</h3>
            </div>
        </div>
        <div className='d2'>
            <div className='con'>
            <h2 className='text-primary'>No. of Voters</h2>
            <h3>50,000</h3>
            </div>
        </div>
      </div>
      <div className="polls2">
        <div className='d3'>
            <div className='con'>
            <h2 className='text-primary'>Votes Tallied</h2>
            <h3>34,823</h3>
            </div>
        </div>
        <div className='d4'>
            <div className='con'>
            <h2 className='text-primary'>Vote Ratio</h2>
            <h3>70%</h3>
            </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Dashboard;


// import React from 'react'
// import './Dashboard.css'
// import Layout from '../Components/Layout'
// import Navbar1 from '../Components/Navbar1'
// import Sidebar1 from '../Components/Sidebar1'
// import Footer from '../Components/Footer'
// import HotelIcon from '@mui/icons-material/Hotel';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// import { LineChart } from '@mui/x-charts/LineChart';
// import { Label } from '@mui/icons-material'
// import Navbar from '../Pages/Navbar'
// import Sidebar from '../Pages/Sidebar'
// import Footer from '../Pages/Footer'

// function Dashboard() {


//   const data = [
//     { value: 30, label: 'Deluxe' },
//     { value: 30, label: 'Standard' },
//     { value: 25, label: 'King' },
//     { value: 15, label: 'Vacation' },
//   ];
  
//   const size = {
//     width: 400,
//     height: 200,
//   };
//   return (
//     <>
//     <Navbar/>
//     <Sidebar/>
//     <div className='dash'>
//     <h1>Dashboard</h1>
//     <div className='nor'>
//     <div className='bor'>
//     <h5>157<br/>
//     <br/>
//     No.of Rooms</h5>
//     </div>
//     <div className='bor'>
//     <h5>34<br/>
//     <br/>
//     Vacant Rooms</h5>
//     </div>
//     <div className='bor'>
//     <h5>50<br/>
//     <br/>
//     Today's Booking</h5>
//     </div>
//     <div className='bor'>
//     <h5>140<br/>
//     <br/>
//     Bookings This Month</h5>
//     </div>

//     </div>
//     <div className='bar'>
//     <h3>Booking Stats</h3>
//     <BarChart
//     xAxis={[
//       {
//         id: 'barCategories',
//         data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         scaleType: 'band',
//       },
//     ]}
//     series={[
//       {
//         data: [23, 15, 30,5,12,10,40,60,12,3,19,27],
//       },
//     ]}
//     width={500}
//     height={300}
//   />
//   <div className='piechart'>
//   <PieChart
//   series={[
//     {
//       arcLabel: (item) => ` ${item.value}`,
//       arcLabelMinAngle: 45,
//       data,
//     },
//   ]}
//   sx={{
//     [`& .${pieArcLabelClasses.root}`]: {
//       fill: 'white',
//       fontWeight: 'bold',
//     },
//   }}
//   {...size}
// />
// </div>
//   </div>

//   <div className='event'>
//   <h3>Event Details </h3>
//   <br/>
//   <div className='event1'>
//   <p><b>Event Name : </b>AK's Birthday<br/>
//   <b>Event Date :</b> 12/09/23<br/>
//   <b>Event Time :</b> 9.00 pm - 12.00 am</p>
//   </div>
//   <div className='event1'>
//   <p><b>Event Name : </b>Conference<br/>
//   <b>Event Date :</b> 30/10/23<br/>
//   <b>Event Time :</b> 9.00 am - 10.00 am</p>
//   </div>
//   <div className='event1'>
//   <p><b>Event Name : </b>Party<br/>
//   <b>Event Date :</b> 30/11/23<br/>
//   <b>Event Time :</b> 9.00 pm - 12.00 am</p>
//   </div>

//   </div>
//     </div>
  
    
// <Footer/>

//     </>
//   )
// }

// export default Dashboard;