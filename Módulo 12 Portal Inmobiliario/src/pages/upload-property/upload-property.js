import { 
    insertNewProperty, 
    getProvincesList, 
    getEquipments, 
    getSaleTypes 
} from './upload-property.api';
import { mapNewPropertyVmToApi } from './upload-property.mappers';
import { formValidation } from './upload-property.validations';
import { 
    formatCheckboxId, 
    setCheckboxList, 
    setOptionList, 
    formatDeleteFeatureButtonId, 
    onAddFeature,
    onRemoveFeature,
    onAddImage 
} from './upload-property.helpers';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers';

const newProperty = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipments: [],
    images: [],
};

// Función para añadir un elemento a un array en newProperty
const addElement = (value, id) => newProperty[id].includes(value) || newProperty[id].push(value);

// Función para eliminar un elemento de un array en newProperty
const removeElement = (value, id) => {
    const index = newProperty[id].indexOf(value);
    index !== -1 && newProperty[id].splice(index, 1);
};

// Función para manejar los eventos de los checkbox de equipamientos y tipos de venta
const checkboxEvent = (list, id) => {
    list.forEach(element => {
        const checkbox = formatCheckboxId(element);
        onUpdateField(checkbox, event => {
            const value = event.target.value;
            event.target.checked ? addElement(value, id) : removeElement(value, id);
        });
    });
};

// Promesa para obtener la lista de provincias, equipamientos y tipos de venta
Promise.all([getProvincesList(), getEquipments(), getSaleTypes()]).then(
    ([provinceList, equipmentList, saleTypesList]) => {
        // Configurar las listas de opciones para las provincias, equipamientos y tipos de venta
        setOptionList(provinceList, 'province');
        setCheckboxList(equipmentList, 'equipments');
        setCheckboxList(saleTypesList, 'saleTypes');
        // Manejar eventos para los checkbox de equipamientos y tipos de venta
        checkboxEvent(equipmentList, 'equipments');
        checkboxEvent(saleTypesList, 'saleTypes');
    }
);

// Función para manejar eventos de actualización de campo en el formulario
const onUpdateValues = ['title', 'notes', 'email', 'phone', 'price', 'address', 'city', 'province', 'squareMeter', 'rooms', 'bathrooms', 'locationUrl'];
for (const param of onUpdateValues) {
    onUpdateField(param, event => {
        const value = event.target.value;
        newProperty[param] = value;
        formValidation.validateField(param, value).then(result => onSetError(param, result));
    });
}

// Función para manejar eventos de carga de archivo, fotos en este caso
onAddFile('add-image', photo => {
    newProperty.images.push(photo);
    onAddImage(photo);
});

// Función para manejar los eventos de inserción de una nueva característica
onSubmitForm('insert-feature-button', () => {
    const newFeature = document.getElementById('newFeature').value.trim();
    if (newFeature) {
        newProperty.mainFeatures.push(newFeature);
        onAddFeature(newFeature);
        const buttonId = formatDeleteFeatureButtonId(newFeature);
        onSubmitForm(buttonId, () => {
            onRemoveFeature(newFeature);
            removeElement(newFeature, 'mainFeatures');
        });
    }
});

// Función para manejar los eventos de envío de formulario
onSubmitForm('save-button', () => {
    console.log({ newProperty });
    formValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            const apiNewProperty = mapNewPropertyVmToApi(newProperty);
            insertNewProperty(apiNewProperty).then(() => {
                history.back();
            });
        }
    });
});
