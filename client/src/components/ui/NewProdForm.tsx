import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { addProdThunk } from '../../redux/slices/prod/thunk';
import type { AddProdForm } from '../../types/prod';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
// import logo from '../../../public/logo.jpg';

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

export default function NewProdForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddProdForm;
    void dispatch(
      addProdThunk({
        name: formData.name,
        desc: formData.price,
        price: formData.price,
        image: formData.image,
      }),
    );
  };

  // const [prodPic, setProdPic] = useState(user?.img || '/logo.jpg');

  // const editProdPic = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const res = await axios.patch('/api/account/profilepic', formData);
  //   if (res.status === 200) {
  //     setProdPic(res.data.image);
  //   }
  // };

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

            {/* <form onSubmit={editProdPic}> */}
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
            {/* </form> */}

            <TextField
              name="price"
              required
              id="outlined-required"
              label="Цена"
              placeholder="Цена"
              type="text"
              sx={{ margin: '5px' }}
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
