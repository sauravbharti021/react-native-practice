import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Screen from "../config/Screen";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppFormPicker from "../components/picker/AppFormPicker";
import colors from "../config/colors";
import CategoryPickerItem from "../components/picker/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listingsApi";
import UploadScreen from "./UploadScreen";


const categories = [
    {
        label: "Furniture",
        value: 1,
        backgroundColor: 'red',
        icon: 'apps'
    },
    {
      label: "Clothing",
      value: 2,
      backgroundColor: 'dodgerblue',
      icon: 'email'
    },
    {
      label: "Camera",
      value: 3,
      backgroundColor: 'yellow',
      icon: 'lock'
    },
];

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please, Select atleast 1 image")
});

const ListingItemScreen = () => {
    
  const location = useLocation()

  const [uploadScreenVisible, setUploadScreenVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async(listing, {resetForm})=> {
    setProgress(0)
    setUploadScreenVisible(true)
    const result = await listingsApi.addListings({...listing, location},
        (progress) => setProgress(progress)
    )

    if(!result.ok){
        return alert("Couldn't save the listing")
    }else{
        setUploadScreenVisible(false);
        alert('Success')
    }

    resetForm()
  }

  return (
    <Screen style={styles.container}>
        <UploadScreen progress={progress} visible={uploadScreenVisible} />
        <AppForm
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: "",
                images: []
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <>  
                <AppFormImagePicker name="images" />
                <AppFormField
                    maxLength={255}
                    placeholder="Title"
                    autoCorrect={false}
                    keyboardType="name"
                    textContentType="name"
                    autoCapitalize="none"
                    name="title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    color={colors.light}
                    items={categories}
                    name="category"
                    numberOfColumns = {3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </>
        </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
});

export default ListingItemScreen;
