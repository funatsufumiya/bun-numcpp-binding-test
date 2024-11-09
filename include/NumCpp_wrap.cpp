#include "NumCpp.hpp"

using namespace nc;

struct ndarray_float {
    NdArray<float> value;
};

// create ndarray
extern "C" ndarray_float* create_ndarray(float* data, int size) {
    NdArray<float> a = { data, size };
    ndarray_float* result = new ndarray_float();
    result->value = a;
    return result;
}

// delete ndarray
extern "C" void delete_ndarray(ndarray_float* ndarray) {
    delete ndarray;
}

// print ndarray
extern "C" void print_ndarray(ndarray_float* ndarray) {
    // std::cout << ndarray->value << std::endl;
    std::cout << ndarray->value;
}

// arange
extern "C" ndarray_float* arange(float start, float stop, float step) {
    ndarray_float* result = new ndarray_float();
    result->value = arange<float>(start, stop, step);
    return result;
}