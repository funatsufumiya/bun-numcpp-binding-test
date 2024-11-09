import { ptr, dlopen } from "bun:ffi";

export const {
  symbols: {
    create_ndarray,
    delete_ndarray,
    print_ndarray,
    arange,
},
} = dlopen("libNumCpp.dylib", {
    create_ndarray: {
        returns: "ptr",
        args: ["ptr", "int"],
    },
    delete_ndarray: {
        returns: "void",
        args: ["ptr"],
    },
    print_ndarray: {
        returns: "void",
        args: ["ptr"],
    },
    arange: {
        returns: "ptr",
        args: ["float", "float", "float"],
    },
});

// const arr = new Float32Array(10);
// const arr_ptr = ptr(arr);
// const ndarr = create_ndarray(arr_ptr, 10);
const ndarr = arange(0, 10, 1);
print_ndarray(ndarr);
delete_ndarray(ndarr);