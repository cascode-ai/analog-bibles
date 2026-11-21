# Detailed solution - A255

With the nulling resistor chosen so that the zero moves into the left half-plane exactly onto $p_2$, the zero's phase lead cancels the pole's lag at every frequency. Only the dominant pole and the pole at $-3GB$ remain in the phase-margin sum.

### Step 1 — What is left after the cancellation

The original singularities are the dominant pole, $p_2$ at $-2GB$, a pole at $-3GB$ and an RHP zero at $20GB$. The nulling resistor moves the zero to $-2GB$: the RHP zero is gone, and the factor $(1+s/2GB)/(1+s/2GB)=1$ removes $p_2$. The additional pole created by the resistor is neglected, as stated.

### Step 2 — Phase margin at GB

With $F=1$ and a large dc gain, the dominant pole contributes $\arctan A_v(0)\approx90°$ and the pole at $3GB$ contributes $\arctan(1/3)=18.43°$:

$$
\Phi_M=180°-90°-\arctan\frac13=90°-18.43°=71.6° .
$$

Before the change the margin was $90°-\arctan(1/2)-\arctan(1/3)-\arctan(1/20)=42.1°$. Removing both the output pole's lag and the RHP zero's lag raises it to about 72°, leaving only the higher pole to erode it.
