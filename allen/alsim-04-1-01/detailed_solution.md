# Detailed solution - alsim-04-1-01

A MOS switch is symmetric in layout, but electrically its source is whichever channel terminal is at the lower potential. Here A is fixed at 2.5 V and B moves with $V_1$, so the source changes from B to A as $V_1$ crosses zero, and with it $V_{GS}$ and the body-effect threshold. A nested dc sweep produces the five curves; the level-1 equations, applied with the correct source terminal, explain their strong asymmetry.

### Step 1 — Simulation deck

```spice
* alsim-04-1-01 MOS switch
M1 A G B 0 NCH W=10U L=1U
VA A 0 DC 2.5
V1 B A DC 0
VG G 0 DC 5
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04
.DC V1 -2.5 2.5 0.05 VG 1 5 1
.PRINT DC I(V1)
.END
```

V1 is connected with + at B and − at A, so $v_B=2.5\ \mathrm V+V_1$. SPICE's $I(\mathrm{V1})$ is the current entering V1 at its + terminal B, which is the current leaving the transistor at B. That is exactly the requested $I$, from A through the channel to B. SPICE swaps drain and source internally, so the device line order does not matter. (The figure below uses 10-mV steps.)

### Step 2 — Which terminal is the source

With $\beta=K'(W/L)=1.1\ \mathrm{mA/V^2}$ and the bulk at 0 V:
- $V_1<0$: B is lower, so B is the source. $V_{SB}=2.5+V_1$, $V_{GS}=V_G-2.5-V_1$, $V_{DS}=-V_1$, and $I>0$.
- $V_1>0$: A is the source. $V_{SB}=2.5$ V and $V_{GS}=V_G-2.5$ V are fixed, $V_{DS}=V_1$, and $I<0$.

In both cases

$$
V_T=V_{T0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right),
$$

and the level-1 current is $\beta(V_{ov}V_{DS}-\tfrac12V_{DS}^2)(1+\lambda V_{DS})$ for $V_{DS}<V_{ov}$, or $\tfrac12\beta V_{ov}^2(1+\lambda V_{DS})$ in saturation.

### Step 3 — $V_1>0$: A is the source

$$
V_T=0.7+0.4\left(\sqrt{3.2}-\sqrt{0.7}\right)=1.081\ \mathrm V .
$$

- For $V_G\le3$ V, $V_{GS}\le0.5\ \mathrm V<V_T$: the switch is off and $I=0$.
- For $V_G=4$ V, $V_{ov}=1.5-1.081=0.419$ V. Beyond $V_1=0.419$ V the device saturates at $I\approx-\tfrac12(1.1\ \mathrm{mA/V^2})(0.419)^2(1+0.04V_1)=-0.10$ mA.
- For $V_G=5$ V, $V_{ov}=1.419$ V, and the current saturates beyond $V_1=1.42$ V at

$$
I=-\tfrac12(1.1\ \mathrm{mA/V^2})(1.419\ \mathrm V)^2(1+0.04\cdot2.5)=-1.22\ \mathrm{mA}\quad(V_1=2.5\ \mathrm V).
$$

The only slope left in saturation comes from λ.

### Step 4 — $V_1<0$: B is the source

As $V_1$ decreases, $V_{GS}$ grows and $V_{SB}$ falls, so the current rises quickly. At $V_1=-1.5$ V with $V_G=5$ V: $V_{SB}=1$ V, $V_T=0.7+0.4(\sqrt{1.7}-\sqrt{0.7})=0.887$ V, $V_{GS}=4$ V, $V_{ov}=3.113$ V and $V_{DS}=1.5$ V, so the device is in nonsaturation:

$$
I=(1.1\ \mathrm{mA/V^2})\left[(3.113)(1.5)-\tfrac12(1.5)^2\right](1+0.04\cdot1.5)=4.13\ \mathrm{mA}.
$$

At $V_1=-2.5$ V, B is at ground ($V_T=0.7$ V, $V_{GS}=V_G$, $V_{DS}=2.5$ V). For $V_G=5$ V the device is in nonsaturation: $I=(1.1)(4.3\cdot2.5-3.125)(1.1)$ mA $=9.23$ mA. For $V_G=1$ V it is saturated: $I=0.55(0.3)^2(1.1)$ mA $=0.054$ mA.

### Step 5 — Simulated curves

![Simulated switch current I versus V1 for VG = 1 to 5 V: large positive currents for V1 below zero, small negative saturated currents for V1 above zero](/q/alsim-04-1-01/solution-curves.svg)

ngspice values of $I$ in mA (the hand values of Steps 3–4 coincide):

| $V_G$ | $V_1=-2.5$ | −1.5 | −0.5 | 0 | +0.5 | +1.5 | +2.5 V |
|---|---|---|---|---|---|---|---|
| 5 V | 9.23 | 4.13 | 0.97 | 0 | −0.66 | −1.17 | −1.22 |
| 4 V | 6.20 | 2.38 | 0.41 | 0 | −0.10 | −0.10 | −0.11 |
| 3 V | 3.20 | 0.72 | 0 | 0 | 0 | 0 | 0 |
| 2 V | 1.02 | 0.007 | 0 | 0 | 0 | 0 | 0 |
| 1 V | 0.054 | 0 | 0 | 0 | 0 | 0 | 0 |

All curves pass through the origin. They are far from symmetric. For $V_1>0$ the source sits at 2.5 V, which removes 2.5 V of gate drive and raises $V_T$ to 1.08 V through the body effect, so the switch conducts poorly or not at all. Leaving the body effect out would make the $V_G=4$ V saturation current about 3.5 times larger, near −0.35 mA. An n-channel switch therefore passes signals near ground well and signals near the upper rail badly.
