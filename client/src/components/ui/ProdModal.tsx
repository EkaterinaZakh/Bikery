import React, { useMemo } from 'react';
import BaseModal from './BaseModal';
import OneProdDesc from './OneProdDesc';
import EditProdList from './EditProdList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearSelectedProd } from '../../redux/slices/prod/slice';

function ProdModal(): JSX.Element {
    const dispatch = useAppDispatch();
    const modalType = useAppSelector((state) => state.products.modalType);
    const selectedProd = useAppSelector((store) => store.products.selectedProd);

    const handleClose = (): void => {
        dispatch(clearSelectedProd())
    }

    const content = useMemo((): JSX.Element => {
        switch (modalType) {
            case 'info':
                return <OneProdDesc onCancel={handleClose} />;
            case 'edit':
                return <EditProdList onCancel={handleClose} />;
            default:
                return <>Error</>;
        }
    }, [modalType]);

    return (
        <BaseModal open={!!selectedProd} onClose={handleClose}>
            {content}
        </BaseModal>
    );
}

export default ProdModal;
