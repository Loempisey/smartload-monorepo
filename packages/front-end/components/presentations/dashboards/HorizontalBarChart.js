// import React from 'react'
// import { ResponsiveBar } from '@nivo/bar'
// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// const HorizontalBarChart = ({ data /* see data tab */ }) => (
//     <ResponsiveBar
//         data={data}
//         keys={[ 'Road', 'Road Update', 'Bridge', 'Bridge Update' ]}
//         indexBy="country"
//         margin={{ top: 0, right: 10, bottom: 30, left: 100 }}
//         padding={0.3}
//         layout="horizontal"
//         valueScale={{ type: 'linear' }}
//         indexScale={{ type: 'band', round: true }}
//         colors={{ datum: 'data.color' }}
      
//         borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: '',
//             legendPosition: 'middle',
//             legendOffset: 32
//         }}
//         axisLeft={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: '',
//             legendPosition: 'middle',
//             legendOffset: -40
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      
//         animate={true}
//         motionStiffness={90}
//         motionDamping={15}
//     />
// )
// export default HorizontalBarChart;