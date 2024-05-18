import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import Screen from "../config/Screen";
import {AppForm, AppFormField, SubmitButton} from './forms'
import AppFormPicker from "./AppFormPicker";
import colors from "../config/colors";
import CategoryPickerItem from "./CategoryPickerItem";


const categories = [
    {
        label: "Furniture",
        value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Camera",
      value: 3,
    },
];

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const ListingItemScreen = () => {
  
  return (
    <Screen style={styles.container}>
        <AppForm
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <>
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
                    // PickerItemComponent={CategoryPickerItem}
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
