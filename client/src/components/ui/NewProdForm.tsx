import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { addProdThunk } from '../../redux/slices/prod/thunk';
import { useAppDispatch } from '../../redux/hooks';

export default function NewProdForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // as AddProdForm;
    void dispatch(addProdThunk(formData));
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить продукт:</h3>
      <form onSubmit={submitHandler}>
        <Box>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              name="name"
              required
              id="outlined-required"
              label="Название"
              placeholder="Название"
              type="text"
              sx={{ margin: '5px' }}
            />

            <TextField
              name="desc"
              required
              id="outlined-required"
              label="Описание"
              placeholder="Описание"
              type="text"
              sx={{ margin: '5px' }}
            />

            {/* <TextField name='categodyId'>
              <Box sx={{ margin: '5px' }}>
                <label htmlFor="language">Категория продукта:</label>
                <select name="categoryId" id="language">
                  <option value="1">Куртки</option>
                  <option value="2">Шлемы</option>
                  <option value="3">Обувь</option>
                </select>
              </Box>
            </TextField> */}

            <TextField
              name="price"
              required
              id="outlined-required"
              label="Цена"
              placeholder="Цена"
              type="text"
              sx={{ margin: '5px' }}
            />

            <TextField
              name="categoryId"
              required
              id="outlined-required"
              label="Категория"
              placeholder="Категория"
              type="text"
              sx={{ margin: '5px' }}
            />

            <TextField
              name="image"
              required
              id="outlined-required"
              // label="Добавьте картинку"
              // placeholder="http://..."
              // value={carData.image}
              // onChange={hangleChange}
              type="file"
            />
            <Button
              style={{ marginTop: '15px', width: '15%', margin: '5px' }}
              type="submit"
              variant="contained"
              color="success"
            >
              Добавить
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}

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
