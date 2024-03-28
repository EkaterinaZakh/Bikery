import React from 'react';
import { Box, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { addProdThunk } from '../../redux/slices/prod/thunk';
import { useAppDispatch } from '../../redux/hooks';
// import Box from '@mui/material/Box';

const boxStyle = {
  backgroundColor: 'rgb(240, 235, 229)',
  padding: '16px',
  width: '500px',
  borderRadius: '10px',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  opacity: '0.8',
  marginTop: '20px',
};

export default function NewProdForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // as AddProdForm;
    void dispatch(addProdThunk(formData));
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={submitHandler}>
        <Box sx={boxStyle}>
          <h3 style={{ textAlign: 'center' }}>Добавить товар:</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              name="name"
              required
              id="outlined-required"
              label="Название"
              placeholder="Название"
              type="text"
              sx={{ marginBottom: '10px', width: '450px' }}
            />

            <TextField
              name="desc"
              required
              id="outlined-multiline-static"
              // label="Multiline"
              label="Описание"
              placeholder="Описание"
              multiline
              rows={6}
              sx={{ marginBottom: '10px', width: '450px' }}
              // value={festData.desc}
              // onChange={handleChange}
              // defaultValue="Default Value"
            />

            <TextField
              name="price"
              required
              id="outlined-required"
              label="Цена"
              placeholder="Цена"
              type="text"
              sx={{ marginBottom: '10px', width: '450px' }}
            />

            {/* <TextField
              name="categoryId"
              required
              id="outlined-required"
              label="Категория"
              placeholder="Категория"
              type="text"
              sx={{ margin: '5px' }}
            /> */}

            {/* <TextField name='categodyId'>
              <Box sx={{ margin: '15px' }}>
                <label htmlFor="language">Категория продукта:</label>
                <select name="categoryId" id="language">
                  <option value="1">Куртки</option>
                  <option value="2">Шлемы</option>
                  <option value="3">Обувь</option>
                </select>
              </Box>
            </TextField> */}

            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Категории</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="categoryId"
                  // value={categoryId}
                  label="Категория"
                  // onChange={handleChange}
                  sx={{ marginBottom: '10px', width: '450px' }}
                >
                  <MenuItem value={1}>Куртки</MenuItem>
                  <MenuItem value={2}>Шлемы</MenuItem>
                  <MenuItem value={3}>Обувь</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* <TextField
              name="image"
              required
              id="outlined-required"
              // label="Добавьте картинку"
              // placeholder="http://..."
              // value={carData.image}
              // onChange={hangleChange}
              type="file"
              sx={{marginBottom: "5px"}}
            /> */}

            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ marginBottom: '10px', width: '450px' }}
            >
              Добавить фото
              <Input type="file" name="image" sx={{ display: 'none' }} />
            </Button>

            <Button
              style={{ margin: '15px', width: '150px' }}
              type="submit"
              variant="contained"
              className="btn-new"
            >
              Добавить
            </Button>
          </div>
        </Box>
      </form>
    </Box>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// export default function InputFileUpload() {
//   return (
//     <Button
//       component="label"
//       role={undefined}
//       variant="contained"
//       tabIndex={-1}
//       startIcon={<CloudUploadIcon />}
//     >
//       Upload file
//       <VisuallyHiddenInput type="file" />
//     </Button>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

// import { Dropdown } from '@mui/base/Dropdown';
// import { MenuButton } from '@mui/base/MenuButton';
// import { Menu } from '@mui/base/Menu';
// import { MenuItem } from '@mui/base/MenuItem';

// const createHandleMenuClick = (menuItem: string) => () => {
//   console.log(`Clicked on ${menuItem}`);
// };

// {
/* <div className="dropdown">
<button className="dropbtn">Категория продукта</button>
<div className="dropdown-content">
  <a href="#">Куртки</a>
  <a href="#">Шлемы</a>
  <a href="#">Обувь</a>
</div>
</div> */
// }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// export default function InputFileUpload() {
//   return (
//     <Button
//       component="label"
//       role={undefined}
//       variant="contained"
//       tabIndex={-1}
//       startIcon={<CloudUploadIcon />}
//     >
//       Upload file
//       <VisuallyHiddenInput type="file" />
//     </Button>
//   );
// }

//       {/* <TextField
//   name="image"
//   required
//   id="outlined-required"
//   // label="Добавьте картинку"
//   placeholder="http://..."
//   // value={carData.image}
//   // onChange={hangleChange}
//   type="file"
// /> */}

// {/* {avatar ? (
//             <img className="logo" src={`${avatar}`} alt="avatar" />
//           ) : (
//             <img className="logo" src={`${logo}`} alt="avatar" />
//           )} */}

//           {/* <Button
//             component="label"
//             onChange={(e) => setImg(e.target.files[0])}
//             // onClick
//             role={undefined}
//             variant="contained"
//             tabIndex={-1}
//             startIcon={<CloudUploadIcon />}
//             sx={{ margin: '5px' }}
//           >
//             Загрузить картинку
//             <VisuallyHiddenInput type="file" />
//           </Button> */}
