# Detailed solution - A250

Write the phase margin as $180°$ minus the phase lag of every singularity at $\omega=GB$. A right-half-plane zero adds lag, just like a left-half-plane pole, so it is subtracted. Set the margin to 45° and solve for the second pole.

### Step 1 — Phase of the loop gain at GB

With $F=1$ the loop gain is

$$
L(s)=\frac{A_v(0)\,(1-s/z)}{(1-s/p_1)(1-s/p_2)},\qquad z>0 .
$$

At $s=j\omega$ the factor $1-j\omega/z$ has phase $-\arctan(\omega/z)$: a lag. Each pole contributes $-\arctan(\omega/|p_i|)$. At the unity-gain frequency GB,

$$
\Phi_M=180°-\arctan\frac{GB}{|p_1|}-\arctan\frac{GB}{|p_2|}-\arctan\frac{GB}{z}.
$$

### Step 2 — Contributions of the dominant pole and the zero

For a dominant-pole amplifier $GB=A_v(0)|p_1|$, so $GB/|p_1|=A_v(0)$ is large and

$$
\arctan\frac{GB}{|p_1|}\approx90° .
$$

With $z=10\,GB$:

$$
\arctan\frac{GB}{z}=\arctan0.1=5.71° .
$$

### Step 3 — Required second pole

Setting $\Phi_M=45°$:

$$
45°=90°-\arctan\frac{GB}{|p_2|}-5.71°\quad\Rightarrow\quad\arctan\frac{GB}{|p_2|}=39.29°,
$$

$$
\frac{GB}{|p_2|}=\tan39.29°=0.818\quad\Rightarrow\quad|p_2|=1.22\,GB .
$$

(Exactly, $\tan(45°-\arctan0.1)=(1-0.1)/(1+0.1)=9/11$, so $|p_2|=11GB/9$.)

### Step 4 — "At least"

$\Phi_M$ increases monotonically as $|p_2|$ increases, because $\arctan(GB/|p_2|)$ decreases. Hence a 45° margin requires

$$
|p_2|\ge1.22\,GB .
$$

Without the zero, $|p_2|=GB$ would suffice; the RHP zero's 5.7° of lag forces the second pole about 22% higher.
