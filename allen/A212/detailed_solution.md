# Detailed solution - A212

The output can fall only as far as the passive network lets it once M1 stops conducting. Find the output voltage with M1 cut off, then confirm that M1 is indeed off at the lowest input.

### Step 1 — Output node equation

At the output node, KCL with the drain current of M1 flowing in, and the sink current $I_Q=200\ \mu\mathrm A$ and the resistor current $v_{OUT}/R_L$ flowing out (the capacitor carries no current in the dc limit), gives

$$
i_{D1}=I_Q+\frac{v_{OUT}}{R_L}.
$$

Since $i_{D1}\ge0$ for an n-channel follower (it can source current but not sink it), the output is lowest when $i_{D1}=0$:

$$
v_{OUT}(\min)=-I_QR_L=-(200\ \mu\mathrm A)(10\ \mathrm{k\Omega})=-2.0\ \mathrm V.
$$

Below this value the resistor alone could not supply the sink current, so the ideal sink holds $v_{OUT}$ at $-2.0$ V; its terminal stays 0.5 V above $-2.5$ V.

### Step 2 — Check that M1 is cut off

M1 conducts only if $V_{GS1}=v_{IN}-v_{OUT}>V_T$. At the lowest input $v_{IN}=-2.5$ V with $v_{OUT}=-2.0$ V,

$$
V_{GS1}=-2.5\ \mathrm V-(-2.0\ \mathrm V)=-0.5\ \mathrm V<V_T=0.7\ \mathrm V,
$$

so M1 is off, consistent with $i_{D1}=0$. M1 begins to conduct when $v_{IN}$ rises above $-2.0+0.7=-1.3$ V; below that the output is flat at

$$
v_{OUT}(\min)=-2.0\ \mathrm V.
$$
