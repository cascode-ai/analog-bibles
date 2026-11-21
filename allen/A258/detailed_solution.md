# Detailed solution - A258

Work from the output stage back: the output-pole specification fixes $g_{m6}$, the zero specification then fixes $C_c$, and GB fixes $g_{m1}$. Each transconductance with its known bias current gives a $W/L$ through the square law. GB is converted to rad/s throughout.

### Step 1 — $g_{m6}$ from the output pole

With $GB=1$ MHz $=2\pi\times10^6$ rad/s and $|p_2|=g_{m6}/C_2$:

$$
g_{m6}=5\,GB\,C_2=5(2\pi\times10^6\ \mathrm{rad/s})(20\ \mathrm{pF})=628.3\ \mu\mathrm S .
$$

### Step 2 — $C_c$ from the RHP zero

With $z=g_{m6}/C_c=3\,GB$:

$$
C_c=\frac{g_{m6}}{3\,GB}=\frac{5\,GB\,C_2}{3\,GB}=\frac53C_2=33.3\ \mathrm{pF}.
$$

### Step 3 — $g_{m1}$ and $W_1/L_1$

From $GB=g_{m1}/C_c$:

$$
g_{m1}=GB\,C_c=(2\pi\times10^6\ \mathrm{rad/s})(33.3\ \mathrm{pF})=209.4\ \mu\mathrm S .
$$

Each input transistor carries half the tail current, $I_1=I_5/2=20\ \mu\mathrm A$. Inverting $g_m=\sqrt{2K'(W/L)I_D}$:

$$
\frac{W_1}{L_1}=\frac{g_{m1}^2}{2K'_NI_1}=\frac{(209.4\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(20\ \mu\mathrm A)}=9.97\approx10 .
$$

### Step 4 — $W_6/L_6$

M6 is p-channel and carries the M7 current, $I_6=320\ \mu\mathrm A$:

$$
\frac{W_6}{L_6}=\frac{g_{m6}^2}{2K'_PI_6}=\frac{(628.3\ \mu\mathrm S)^2}{2(50\ \mu\mathrm{A/V^2})(320\ \mu\mathrm A)}=12.3 .
$$

### Step 5 — Result and check

$$
C_c=33.3\ \mathrm{pF},\qquad \frac{W_1}{L_1}\approx10,\qquad \frac{W_6}{L_6}\approx12.3 .
$$

With these values the two-pole model gives a phase margin at GB of $90°-\arctan(1/5)-\arctan(1/3)=90°-11.3°-18.4°=60.3°$, including the RHP zero's lag.
