import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

type CheckOutData = {
  name: string;
  email: string;
  address: string;
  zip: string;
  city: string;
};

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckOutData>();

  const onSubmit = (data: CheckOutData) => {
    navigate("/order-confirmation", {
      state: {
        customer: data,
        items: cart,
      },
    });
    clearCart();
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Kassan</h1>

      <div>
        <h2>Din beställning</h2>

        {cart.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price} kr</p>
          </div>
        ))}

        <p className="mt-4 font-bold">Totalt: {totalPrice} kr </p>
      </div>

      <p>Här fyller du i dina uppgifter.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Namn</label>

          <Input
            id="name"
            {...register("name", {
              required: "Namn är obligatoriskt",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">E-post</label>

          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "E-post är obligatoriskt",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="address">Adress</label>
          <Input
            id="address"
            {...register("address", {
              required: "Adress är obligatoriskt",
            })}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="zip">Postnummer</label>

          <Input
            id="zip"
            {...register("zip", {
              required: "Postnummer är obligatoriskt",
              pattern: {
                value: /^\d{5}$/,
                message: "Postnummer måste vara exakt 5 siffror",
              },
            })}
          />
          {errors.zip && <p>{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor="city">Stad</label>

          <Input
            id="city"
            {...register("city", {
              required: "Stad är obligatoriskt",
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default Checkout;
