# Detailed solution - alsim-03-6-03

Drive the diode-connected M1 with a dc current source $i_1$, sweep the output voltage $v_2$ applied to the drain of M2, and step $i_1$ in an outer sweep so that one run gives the whole family. The square law with channel-length modulation predicts where each curve bends and how much it rises.

### Step 1 — Simulation deck

The current source pushes $i_1$ into node 1 (gate and drain of M1); the source V2 sets $v_2$, and $i_2=-I(\mathrm{V2})$. A nested dc sweep steps $i_1$ from 10 to 70 µA while $v_2$ runs from 0 to 5 V:

```spice
* alsim-03-6-03 current mirror
I1 0 1 DC 10U
M1 1 1 0 0 MN W=10U L=2U
M2 2 1 0 0 MN W=10U L=2U
V2 2 0 DC 0
.MODEL MN NMOS LEVEL=1 VTO=0.7 KP=110U LAMBDA=0.01
.DC V2 0 5 10m I1 10U 70U 10U
.PRINT DC I(V2)
.END
```

The second family uses `LAMBDA=0.04`.

### Step 2 — Gate voltage set by $i_1$

M1 is diode connected, so it is saturated with $V_{DS1}=V_{GS1}$:

$$
i_1=\frac{K'}{2}\frac WL(V_{GS1}-V_T)^2(1+\lambda V_{GS1}),\qquad \frac{K'}{2}\frac WL=(55\ \mu\mathrm{A/V^2})(5)=275\ \mu\mathrm{A/V^2}.
$$

For $i_1=10$ µA and small $\lambda$, $V_{GS1}\approx0.7+\sqrt{10/275}=0.891$ V. The simulated values:

| $i_1$ (µA) | 10 | 20 | 30 | 40 | 50 | 60 | 70 |
|---|---|---|---|---|---|---|---|
| $V_{GS1}$, λ = 0.01 (V) | 0.890 | 0.968 | 1.029 | 1.079 | 1.124 | 1.164 | 1.202 |
| $V_{GS1}$, λ = 0.04 (V) | 0.887 | 0.965 | 1.024 | 1.073 | 1.117 | 1.157 | 1.193 |

### Step 3 — Shape of each curve

M2 has the same $V_{GS}$ as M1.
- For $v_2<V_{GS1}-V_T$ (0.19 to 0.50 V) M2 is in nonsaturation and $i_2$ rises steeply from the origin.
- Beyond that knee M2 is saturated, and dividing its current by that of M1 gives

$$
i_2=i_1\,\frac{1+\lambda v_2}{1+\lambda V_{GS1}} .
$$

So $i_2=i_1$ exactly at $v_2=V_{GS1}$, and the curve rises linearly with slope $\lambda i_1/(1+\lambda V_{GS1})$. The output resistance is its inverse:

$$
r_{out}=\frac{1+\lambda V_{GS1}}{\lambda i_1}:\quad 10\ \mathrm{M\Omega}\ (10\ \mu\mathrm A)\ \text{to}\ 1.45\ \mathrm{M\Omega}\ (70\ \mu\mathrm A)\ \text{for}\ \lambda=0.01,\qquad 2.6\ \text{to}\ 0.37\ \mathrm{M\Omega}\ \text{for}\ \lambda=0.04 .
$$

### Step 4 — Value at $v_2=5$ V

For $i_1=10$ µA and $\lambda=0.01\ \mathrm{V^{-1}}$:

$$
i_2(5\ \mathrm V)=(10\ \mu\mathrm A)\,\frac{1+0.05}{1+0.0089}=10.41\ \mu\mathrm A ,
$$

about 4% high. With $\lambda=0.04\ \mathrm{V^{-1}}$ the factor is $1.2/1.0355=1.159$, about 15% high. The simulated end points agree:

| $i_1$ (µA) | 10 | 20 | 30 | 40 | 50 | 60 | 70 |
|---|---|---|---|---|---|---|---|
| $i_2(5\ \mathrm V)$, λ = 0.01 (µA) | 10.4 | 20.8 | 31.2 | 41.6 | 51.9 | 62.3 | 72.6 |
| $i_2(5\ \mathrm V)$, λ = 0.04 (µA) | 11.6 | 23.1 | 34.6 | 46.0 | 57.4 | 68.8 | 80.2 |

### Step 5 — Simulated families

![Simulated i2 versus v2 for i1 = 10 to 70 µA with λ = 0.01 per volt, knees marked at VGS − VT](/q/alsim-03-6-03/solution-lambda-001.svg)

![Simulated i2 versus v2 for i1 = 10 to 70 µA with λ = 0.04 per volt, knees marked at VGS − VT](/q/alsim-03-6-03/solution-lambda-004.svg)

Each curve has its knee at $v_2=V_{GS1}-V_T$, which grows with $i_1$ because the overdrive grows as $\sqrt{i_1}$. Past the knee the curves are straight lines whose slope is four times steeper for $\lambda=0.04$. The mirror copies $i_1$ accurately only near $v_2=V_{GS1}$; elsewhere in saturation the error is $\lambda(v_2-V_{GS1})/(1+\lambda V_{GS1})$.
