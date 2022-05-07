import * as React from 'react';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fireAuth } from '../../../services/firebase';
import { useRouter } from 'next/router';
import {registerUser} from '../../../utils/functions/auth/authUser'
import postData from '../../../utils/api/postData';
import useSWR from 'swr';
import {fetcher} from '../../../utils/api/fetcher'



const useStyles = makeStyles({
  container: {
    textAlign: "center",
    // marginLeft: "30%",
    marginTop: "4%",
    position: "absolute",
    lineHeight: "1.8cm",
    padding: "10px",
    borderRadius: "15px"
  },
  textfield: {
    width: "80%"
  },
  title: {
    fontSize: "30px",
    marginBottom: "15px"
  },
  button: {
    borderRadius: "25px",
    color: "#1976D2",
    borderColor: "#1976D2",
    width:""
  },
  link: {
    textDecoration: "none",
  }
})

export default function Register() {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,

  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");



  const handleCreateUser =async (e) => {
    e.preventDefault();
    setLoading(false);
    const {fullname, username, email, password } = e.target.elements;
    
    try{
      const res = await postData(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`,{
        fullname:fullname.value,
        username:username.value,
        email:email.value,
        password:password.value,
      })
      console.log(res)
      if(res.statusCode ==200){
 router.push('/signin')
      }else{
        setError(res.message)
      }
     
    }catch(error){
      console.log(error);
    }
    
       
  }
  return (

    <div>
      <Grid container spacing={1}>
        <Grid item sm={4}>
        </Grid>
        <Grid item xs={12} md={8} sm={5}>
          <Paper className={classes.container} elevation={5}>
            <Typography className={classes.title}> Sign Up</Typography>

            <form onSubmit={handleCreateUser} className="mt-8 space-y-6" >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  type="text"
                  name="fullname"
                  label="Full Name"
                  placeholder="Full Name"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>
              
              <div>
                <FormControl variant="outlined" className={classes.textfield}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    label="Password"
                    name="password"
                  />
                </FormControl>
                <div style={{ width: "80%", marginLeft: "38px", display: "flex", marginTop: "5px" }}>
                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                  <Typography style={{ textAlign: "left" }}>You&apos;re agreeing to our Term of <Link href="#" className={classes.link} >Service </Link>and our<Link href="#" className={classes.link}> Privacy</Link></Typography>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Link href="/dashboard" className={classes.link}>
                    <Button variant="outlined" type="submit" className={classes.button}>
                      {
                        loading?'Loading...':'Signup'
                      }
                    </Button>
                    <Typography color="error" className="mt-2 text-center text-sm text-red-600">{error}</Typography>
                  </Link>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Typography>Already have an account? <Link href="/signin" className={classes.link}>Login</Link></Typography>
                </div>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item sm={4}>
        </Grid>
      </Grid>
    </div>


  );
}


// import { useState, useEffect } from "react";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Flex,
//   Table,
//   Thead,
//   Tr,
//   Th,
//   Tbody,
//   Td,
//   VStack,
//   useToast,
// } from "@chakra-ui/react";
// // import Header from "../components/header";
// import api from "../../../services/api";

// export default function Home() {
//   const [fullname, setFullname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [password, setPassword] = useState("");
//   const [id, setId] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const isValidFormData = () => {
//     if (!fullname) {
//       return toast({
//         title: "Please input your fullname !",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//     if (!username) {
//       return toast({
//         title: "Please input your username !",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//     if (!email) {
//       return toast({
//         title: "Please input your email !",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//     if (!role) {
//       return toast({
//         title: "Please input your role !",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//     if (!password) {
//       return toast({
//         title: "Please input your password !",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//     if (users.some((user) => user.email === email && user._id !== id)) {
//       return toast({
//         title: "E-mail already registered !",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleSubmitCreateUser = async (e) => {
//     e.preventDefault();

//     if (isValidFormData()) return;
//     try {
//       setIsLoading(true);
//       const { data } = await api.post("/user/signup", { fullname,username,email,role,password });
//       setUsers(users.concat(data.data));
//       setFullname("");
//       setUsername("");
//       setEmail("");
//       setRole("");
//       setPassword("");
//       setIsFormOpen(!isFormOpen);
//       toast({
//         title: "Registered successfully !",
//         status: "success",
//         duration: 9000,
//         isClosable: true,
//       });
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteUser = async (_id) => {
//     try {
//       await api.delete(`/user/${_id}`);
//       toast({
//         title: "Successfully deleted !",
//         status: "info",
//         duration: 9000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlShowUpdateUser = (user) => {
//     setId(user._id);
//     setFullname(user.fullname);
//     setUsername(user.username);
//     setEmail(user.email);
//     setRole(user.role);
//     setPassword(user.password);
//     setIsFormOpen(true);
//   };

//   const handleUpdateUser = async (e) => {
//     e.preventDefault();

//     if (isValidFormData()) return;

//     try {
//       setIsLoading(true);
//       await api.put(`user/${id}`, { fullname,username,email,role,password });
//       setFullname("");
//       setUsername("");
//       setEmail("");
//       setRole("");
//       setPassword("");
//       setId(null);
//       setIsFormOpen(!isFormOpen);

//       toast({
//         title: "Updated successfully !",
//         status: "success",
//         duration: 9000,
//         isClosable: true,
//       });
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };

//   const toast = useToast();

//   useEffect(() => {
//     [
//       api.get("/user").then(({ data }) => {
//         setUsers(data.data);
//       }),
//     ];
//   }, [users]);

//   return (
//     <Box>
//       {/* <Header /> */}
//       <Flex align="center" justifyContent="center">
//         <Box
//           width={800}
//           borderWidth={1}
//           borderRadius={8}
//           boxShadow="lg"
//           p={20}
//           mt="25"
//         >
//           <Flex justifyContent="flex-end">
//             <Button
//               colorScheme="green"
//               onClick={() => setIsFormOpen(!isFormOpen)}
//             >
//               {isFormOpen ? "-" : "+"}
//             </Button>
//           </Flex>

//           {isFormOpen ? (
//             <VStack
//               as="form"
//               onSubmit={id ? handleUpdateUser : handleSubmitCreateUser}
//             >
//               <FormControl>
//                 <FormLabel>FullName</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="your fullname..."
//                   onChange={(e) => setFullname(e.target.value)}
//                   value={fullname}
//                 />
//               </FormControl>

//               <FormControl>
//                 <FormLabel>Userame</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="your username..."
//                   onChange={(e) => setUsername(e.target.value)}
//                   value={username}
//                 />
//               </FormControl>

//               <FormControl mt={5}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                   type="email"
//                   placeholder="example@gmail.com"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                 />
//               </FormControl>

//               <FormControl>
//                 <FormLabel>Role</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="your role..."
//                   onChange={(e) => setRole(e.target.value)}
//                   value={role}
//                 />
//               </FormControl>    

//               <FormControl>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                   type="password"
//                   placeholder="your password..."
//                   onChange={(e) => setPassword(e.target.value)}
//                   value={password}
//                 />
//               </FormControl>          

//               <Button
//                 colorScheme="green"
//                 type="submit"
//                 mt={6}
//                 isLoading={isLoading}
//               >
//                 {id ? "Update" : "Register"}
//               </Button>
//             </VStack>
//           ) : null}

//           <Table variant="simple" mt={6}>
//             <Thead bgColor="teal.500">
//               <Tr>
//                 <Th textColor="white">Fullname</Th>
//                 <Th textColor="white">Username</Th>
//                 <Th textColor="white">Email</Th>
//                 <Th textColor="white">Role</Th>
//                 <Th textColor="white">Password</Th>
//                 <Th textColor="white">Action</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {users.map((user, index) => (
//                 <Tr key={index}>
//                   <Td>{user.fullname}</Td>
//                   <Td>{user.username}</Td>
//                   <Td>{user.email}</Td>
//                   <Td>{user.role}</Td>
//                   <Td>{user.password}</Td>
//                   <Td justifyContent="space-between">
//                     <Flex>
//                       <Button
//                         size="sm"
//                         fontSize="small"
//                         colorScheme="yellow"
//                         mr="2"
//                         onClick={() => handlShowUpdateUser(user)}
//                       >
//                         EDIT
//                       </Button>
//                       <Button
//                         size="sm"
//                         fontSize="small"
//                         colorScheme="red"
//                         mr="2"
//                         onClick={() => handleDeleteUser(user._id)}
//                       >
//                         DELETE
//                       </Button>
//                     </Flex>
//                   </Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }
