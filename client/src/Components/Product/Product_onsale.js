import React from "react";
import p1 from "../../Assets/p1.jpg";
import {Link} from 'react-router-dom';

function Product_onsale({product}) {
  return (
    <>
    
      {product &&
      <Link to={`/product/${product._id}`} style={{textDecoration: "none"}}>
      <div className="row mt-3" style={{ justifyContent: "center" }}>
        <div
          className="row pdos"
          style={{
            padding: "0px",
            width: "19.35rem",
            background: "white",
            borderRadius: "0.75rem",
          }}
        >
          <img
            alt="p1"
            src={product.imageurl}
            style={{
              padding: "0px",
              height: "21.05rem",
              width: "100%",
              borderRadius: "0.75rem",
            }}
          ></img>
          <p
            className="onsale_desc"
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#646464",
              paddingTop: "8px",
            }}
          >
            {product.description}
          </p>
          <div className="offer_badge">
            <svg
              width="4.3rem"
              height="4.3rem"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.664 92.444C41.664 91.324 40.528 90.052 39.664 89.884C38.2677 89.9434 36.9134 90.3787 35.744 91.144L35.772 91.124C34.3601 91.9543 32.7855 92.4701 31.156 92.636L31.108 92.64H31.068C30.5642 92.6405 30.0653 92.5413 29.6 92.348L29.624 92.356C27.66 91.54 26.864 89.268 26.104 87.068C25.7992 85.7434 25.1712 84.5148 24.276 83.492L24.284 83.5C23.5923 83.1641 22.8216 83.0244 22.056 83.096H22.072C21.488 83.096 20.872 83.132 20.256 83.168C19.592 83.208 18.928 83.24 18.296 83.24C17.537 83.3116 16.7714 83.2325 16.0431 83.0074C15.3148 82.7822 14.6382 82.4154 14.052 81.928L14.06 81.936C13.4307 81.0387 12.9969 80.0192 12.7867 78.9436C12.5765 77.868 12.5947 76.7602 12.84 75.692L12.832 75.744C13.0664 74.3761 12.9508 72.9712 12.496 71.66L12.512 71.72C11.5077 70.8371 10.3016 70.2148 9 69.908L8.944 69.896C6.744 69.132 4.464 68.34 3.656 66.376C3.42421 65.3167 3.41584 64.2207 3.63141 63.158C3.84698 62.0953 4.28176 61.0892 4.908 60.204L4.892 60.228C5.62279 59.0549 6.04521 57.7161 6.12 56.336V56.316C5.952 55.448 4.68 54.316 3.56 53.316C1.808 51.764 0 50.152 0 47.996C0 45.84 1.808 44.228 3.556 42.664C4.676 41.664 5.948 40.528 6.116 39.664C6.03482 38.2705 5.60129 36.9203 4.856 35.74L4.876 35.772C4.25151 34.88 3.82038 33.8673 3.61029 32.7989C3.40019 31.7305 3.41576 30.63 3.656 29.568L3.648 29.62C4.464 27.656 6.736 26.86 8.936 26.1C10.32 25.776 11.524 25.14 12.512 24.268L12.504 24.276C12.955 22.9664 13.0624 21.563 12.816 20.2L12.824 20.248C12.5883 19.1819 12.5768 18.0784 12.7902 17.0077C13.0037 15.9369 13.4375 14.9222 14.064 14.028L14.048 14.052C14.6372 13.5665 15.3165 13.2021 16.0468 12.9797C16.7771 12.7573 17.5442 12.6813 18.304 12.756H18.28C18.92 12.756 19.58 12.792 20.24 12.828C20.856 12.864 21.472 12.9 22.056 12.9C22.825 12.9704 23.5986 12.8279 24.292 12.488L24.268 12.5C25.128 11.516 25.764 10.316 26.076 8.988L26.088 8.932C26.856 6.732 27.648 4.452 29.608 3.644C30.0661 3.45621 30.5569 3.36104 31.052 3.364H31.096H31.092C32.836 3.544 34.42 4.084 35.816 4.908L35.76 4.88C36.9148 5.6394 38.2549 6.0695 39.636 6.124H39.652C40.52 5.956 41.652 4.684 42.652 3.564C44.228 1.808 45.844 0 48 0C50.156 0 51.768 1.808 53.332 3.56C54.332 4.68 55.468 5.952 56.332 6.12C57.728 6.05556 59.0813 5.61917 60.252 4.856L60.22 4.876C61.6331 4.04583 63.2092 3.53139 64.84 3.368L64.888 3.364H64.928C65.448 3.364 65.944 3.468 66.396 3.656L66.372 3.648C68.336 4.464 69.132 6.736 69.892 8.936C70.216 10.32 70.852 11.52 71.72 12.512L71.712 12.504C72.4052 12.8395 73.1777 12.9765 73.944 12.9H73.928C74.512 12.9 75.128 12.864 75.744 12.832C76.408 12.796 77.072 12.76 77.704 12.76C78.4635 12.689 79.2296 12.7683 79.9585 12.9934C80.6874 13.2185 81.3648 13.585 81.952 14.072L81.944 14.064C82.5713 14.9622 83.0036 15.9819 83.213 17.0573C83.4224 18.1327 83.4044 19.24 83.16 20.308L83.168 20.256C82.933 21.6241 83.05 23.0296 83.508 24.34L83.492 24.284C84.472 25.148 85.676 25.784 87.004 26.092L87.06 26.104C89.26 26.872 91.54 27.664 92.348 29.624C92.5774 30.6832 92.5849 31.7784 92.3701 32.8407C92.1554 33.9029 91.7229 34.9092 91.1 35.796L91.116 35.772C90.3832 36.9362 89.9567 38.2668 89.876 39.64V39.664C90.044 40.532 91.316 41.664 92.436 42.664C94.2 44.236 96.008 45.848 96.008 48.004C96.008 50.16 94.2 51.776 92.448 53.34C91.328 54.34 90.056 55.472 89.888 56.34C89.976 57.792 90.428 59.124 91.148 60.268L91.128 60.232C91.7526 61.1231 92.1838 62.1351 92.3939 63.2029C92.6041 64.2707 92.5884 65.3706 92.348 66.432L92.356 66.38C91.544 68.348 89.268 69.14 87.068 69.9C85.7425 70.2047 84.5136 70.8342 83.492 71.732L83.5 71.724C83.049 73.0336 82.9416 74.437 83.188 75.8L83.18 75.752C83.4152 76.8175 83.4264 77.9202 83.2129 78.9902C82.9995 80.0603 82.566 81.0743 81.94 81.968L81.956 81.944C81.3679 82.4304 80.6896 82.796 79.9599 83.0197C79.2303 83.2435 78.4637 83.3211 77.704 83.248H77.728C77.088 83.248 76.428 83.212 75.768 83.176C75.1635 83.1347 74.5579 83.1106 73.952 83.104C73.1829 83.0321 72.409 83.1747 71.716 83.516L71.74 83.504C70.8597 84.5096 70.239 85.7153 69.932 87.016L69.92 87.072C69.152 89.272 68.36 91.552 66.4 92.36C65.9419 92.5478 65.4511 92.643 64.956 92.64H64.912H64.916C63.2487 92.4738 61.6379 91.9455 60.196 91.092L60.248 91.12C59.0936 90.3602 57.7531 89.9313 56.372 89.88H56.356C55.488 90.048 54.356 91.32 53.356 92.44C51.776 94.192 50.164 96 48.004 96C45.844 96 44.236 94.192 42.668 92.444H42.664ZM56.792 29.236L37.272 64.708C37.2165 64.809 37.1882 64.9227 37.1899 65.0379C37.1916 65.1531 37.2233 65.2659 37.2818 65.3652C37.3403 65.4644 37.4236 65.5468 37.5236 65.6041C37.6236 65.6614 37.7368 65.6917 37.852 65.692H41.24C41.3577 65.6922 41.4732 65.6607 41.5746 65.6009C41.6759 65.5411 41.7593 65.4551 41.816 65.352V65.348L61.308 29.872C61.3635 29.771 61.3918 29.6573 61.3901 29.5421C61.3884 29.4269 61.3567 29.3141 61.2982 29.2148C61.2397 29.1156 61.1564 29.0332 61.0564 28.9759C60.9564 28.9186 60.8432 28.8883 60.728 28.888H57.372C57.2534 28.8883 57.1371 28.9204 57.0351 28.9809C56.9331 29.0414 56.8491 29.1281 56.792 29.232V29.236ZM53.976 47.432C53.4677 47.8522 53.0586 48.3796 52.7778 48.9763C52.4971 49.5731 52.3517 50.2245 52.352 50.884V60.488C52.352 61.864 52.984 63.092 53.972 63.9L53.98 63.908C55.004 64.764 56.332 65.28 57.784 65.28C59.236 65.28 60.564 64.76 61.596 63.9L61.588 63.908C62.588 63.096 63.22 61.868 63.22 60.492V50.9V50.892C63.22 49.516 62.6 48.28 61.628 47.456L61.62 47.452C60.6062 46.5411 59.2909 46.038 57.928 46.04H57.804H57.812H57.688C56.3213 46.0381 55.001 46.536 53.976 47.44L53.984 47.436L53.976 47.432ZM37 30.204C36.4917 30.6242 36.0826 31.1516 35.8018 31.7483C35.5211 32.3451 35.3757 32.9965 35.376 33.656V43.256C35.376 44.636 36.004 45.872 36.996 46.684L37.004 46.692C38.028 47.56 39.36 48.084 40.816 48.084C42.272 48.084 43.608 47.556 44.636 46.684L44.628 46.692C45.636 45.872 46.272 44.636 46.272 43.248V33.672C46.272 32.284 45.644 31.048 44.652 30.224L44.644 30.22C43.5758 29.3102 42.2184 28.8109 40.8153 28.8116C39.4121 28.8123 38.0552 29.3131 36.988 30.224L36.996 30.216L37 30.204ZM56.912 61.008C56.826 60.9395 56.7565 60.8525 56.7087 60.7535C56.6609 60.6545 56.6361 60.546 56.636 60.436V50.848V50.832C56.636 50.6 56.744 50.396 56.908 50.264C57.1156 50.0838 57.3811 49.9844 57.656 49.984H57.708H57.704H57.752C58.0275 49.9838 58.2941 50.0816 58.504 50.26C58.5895 50.3281 58.6586 50.4144 58.7064 50.5127C58.7542 50.611 58.7793 50.7187 58.78 50.828V60.436C58.7801 60.545 58.7557 60.6526 58.7086 60.7509C58.6615 60.8492 58.593 60.9357 58.508 61.004C58.292 61.18 58.012 61.284 57.708 61.284C57.404 61.284 57.124 61.18 56.904 61H56.908L56.912 61.008ZM39.952 43.784C39.8664 43.7151 39.7973 43.6281 39.7495 43.5291C39.7018 43.4302 39.6767 43.3219 39.676 43.212V33.624V33.612C39.676 33.38 39.784 33.176 39.948 33.04C40.164 32.864 40.444 32.76 40.748 32.76C41.052 32.76 41.332 32.864 41.552 33.044H41.548C41.634 33.1125 41.7035 33.1995 41.7513 33.2985C41.799 33.3975 41.8239 33.5061 41.824 33.616V43.22C41.8238 43.3295 41.7993 43.4377 41.7523 43.5366C41.7052 43.6355 41.6368 43.7227 41.552 43.792C41.336 43.968 41.056 44.072 40.752 44.072C40.448 44.072 40.168 43.968 39.948 43.788H39.952V43.784Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      </Link>}
    </>
  );
}

export default Product_onsale;
