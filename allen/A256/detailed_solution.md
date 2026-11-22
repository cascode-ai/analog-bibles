# Detailed solution - A256

Decide which singularities move when $C_L$ grows: the output pole scales with $1/C_L$, while the compensated zero and GB do not involve $C_L$. Then sum the phase contributions at $\omega=GB$.

### Step 1 — Effect of $C_L$ on each quantity

- Output pole: $|p_2|\cong g_{mII}/C_{II}$ with $C_{II}\approx C_L$, so increasing $C_L$ by 4 gives
$$
|p_2|=\frac{2GB}{4}=0.5\,GB .
$$
- LHP zero: $z_1=-1/[C_c(R_z-1/g_{mII})]$ contains only $C_c$, $R_z$ and $g_{mII}$, so it stays at $-2GB$, where it was placed to cancel the original $p_2$.
- $GB=g_{mI}/C_c$ is unchanged, as is the pole at $-3GB$ (taken as fixed).

The cancellation is lost: the zero now sits at $2GB$, above the pole at $0.5GB$.

### Step 2 — Phase margin at GB

The dominant pole gives about $90°$ of lag, $p_2$ gives $\arctan(1/0.5)=63.43°$ of lag, the LHP zero gives $\arctan(1/2)=26.57°$ of lead, and the pole at $3GB$ gives $\arctan(1/3)=18.43°$ of lag:

$$
\Phi_M=180°-90°-\arctan\frac{GB}{0.5GB}+\arctan\frac{GB}{2GB}-\arctan\frac{GB}{3GB}
=90°-63.43°+26.57°-18.43°=34.7° .
$$

### Step 3 — Remark

Increasing the load by a factor of 4 drops the margin from 71.6° to about 35° at GB, because the nulling-resistor zero tracks $C_c$, not $C_L$. With the output pole now below GB, the loop gain actually crosses 0 dB earlier, near $0.64\,GB$, where the margin evaluated is about 44°; by the convention of evaluating the phase at GB the answer is $34.7°$.
