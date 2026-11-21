# Detailed solution - A251

Write the phase margin as $180°$ minus the lag of the three poles at $\omega=GB$, set it to 60°, and solve for the second pole with the third pole at $10\,GB$.

### Step 1 — Phase of the loop gain at GB

With $F=1$ and three left-half-plane poles,

$$
L(s)=\frac{A_v(0)}{(1-s/p_1)(1-s/p_2)(1-s/p_3)},
$$

each pole contributes a lag $\arctan(\omega/|p_i|)$. At $\omega=GB$,

$$
\Phi_M=180°-\arctan\frac{GB}{|p_1|}-\arctan\frac{GB}{|p_2|}-\arctan\frac{GB}{|p_3|}.
$$

### Step 2 — Dominant and third poles

For a dominant-pole amplifier $GB/|p_1|=A_v(0)$ is large, so $\arctan(GB/|p_1|)\approx90°$. With $|p_3|=10\,GB$:

$$
\arctan\frac{GB}{|p_3|}=\arctan0.1=5.71° .
$$

### Step 3 — Required second pole

Setting $\Phi_M=60°$:

$$
60°=90°-\arctan\frac{GB}{|p_2|}-5.71°\quad\Rightarrow\quad\arctan\frac{GB}{|p_2|}=24.29°,
$$

$$
\frac{GB}{|p_2|}=\tan24.29°=0.451\quad\Rightarrow\quad|p_2|=2.22\,GB .
$$

### Step 4 — "At least"

Raising $|p_2|$ reduces its lag $\arctan(GB/|p_2|)$, so $\Phi_M$ increases monotonically with $|p_2|$. A 60° margin therefore requires

$$
|p_2|\ge2.2\,GB .
$$

Without the third pole, $|p_2|=\sqrt3\,GB=1.73\,GB$ would suffice; the 5.7° of lag from $p_3$ pushes the requirement to $2.2\,GB$.
