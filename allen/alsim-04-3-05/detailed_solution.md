# Detailed solution - alsim-04-3-05

In the high-swing cascode, the narrow diode M4 (1/1) biases the gate of the cascode M2 just high enough to hold M1 at the edge of saturation, so the output can swing down to $2V_{ON}$ instead of $V_T+2V_{ON}$. Find the node voltages and $r_{out}$ by hand with the square law, then simulate with the LEVEL-3 model to get the actual $i_{OUT}$. The simulated current falls short of 10 µA because M3 and M1 operate at very different drain–source voltages.

### Step 1 — Hand analysis: bias voltages

For the 4/1 devices at 10 µA,

$$
V_{ON}=\sqrt{\frac{2I}{K'(W/L)}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4)}}=0.213\ \mathrm V .
$$

M4 is four times narrower, so its overdrive is twice as large, $2V_{ON}=0.426$ V. Both diodes have grounded sources:

$$
V_{G1}=V_{GS3}=V_T+V_{ON}=0.913\ \mathrm V,\qquad V_{G2}=V_{GS4}=V_T+2V_{ON}=1.126\ \mathrm V .
$$

### Step 2 — Hand analysis: minimum output voltage

M2 carries 10 µA with $V_{GS2}=V_T+V_{ON}$ (body effect ignored), so its source, the drain of M1, sits at

$$
V_{DS1}=V_{G2}-V_{GS2}=(V_T+2V_{ON})-(V_T+V_{ON})=V_{ON}=0.213\ \mathrm V ,
$$

exactly the edge of saturation of M1. M2 stays saturated for $v_{OUT}\ge V_{DS1}+V_{ON}$:

$$
V_{OUT}(\min)=2V_{ON}=0.426\ \mathrm V .
$$

With the body effect, M2 has $V_{SB2}=V_{DS1}\approx0.17$ V, which raises $V_{T2}$ to about 0.74 V. This lowers $V_{DS1}$ to roughly 0.17–0.18 V, just inside the triode region of M1, and M2 then saturates for $v_{OUT}\ge V_{G2}-V_{T2}\approx0.39$ V.

### Step 3 — Hand analysis: output resistance

Treating M1 as saturated, with $g_{m2}=\sqrt{2K'(W/L)I}=\sqrt{2(110\ \mu)(4)(10\ \mu)}=93.8\ \mu$S and $r_{ds}=1/(\lambda I)=2.5$ MΩ,

$$
r_{out}=r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}=5\ \mathrm{M\Omega}+(93.8\ \mu\mathrm S)(2.5\ \mathrm{M\Omega})^2=0.59\ \mathrm{G\Omega},
$$

or about 0.72 GΩ with $g_{mbs2}$. If M1 slips into the triode region its $r_{ds1}$ falls, and $r_{out}$ falls with it.

### Step 4 — Simulation deck

```spice
* alsim-04-3-05 high-swing cascode sink, LEVEL 3
I4 0 4 DC 10U
I3 0 3 DC 10U
M4 4 4 0 0 N3 W=1U L=1U
M3 3 3 0 0 N3 W=4U L=1U
M1 1 3 0 0 N3 W=4U L=1U
M2 2 4 1 0 N3 W=4U L=1U
VOUT 2 0 DC 2
.MODEL N3 NMOS LEVEL=3 VTO=0.7 UO=660 DELTA=2.4 ETA=0.1 KAPPA=0.15
+ THETA=0.1 NSUB=3E16 TOX=140E-10 XJ=0.2U LD=0.016U NFS=7E11
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38
.OP
.DC VOUT 0 5 1M
.PRINT DC I(VOUT)
.END
```

All bulks are grounded, and $i_{OUT}=-I(\mathrm{VOUT})$.

### Step 5 — Simulated output current

At $v_{OUT}=2$ V the operating point is V(4) = 1.109 V, V(3) = 0.830 V and V(1) = 0.282 V, and

$$
i_{OUT}=7.62\ \mu\mathrm A .
$$

![Simulated iOUT versus vOUT of the high-swing cascode sink with the LEVEL-3 model and with LEVEL-1 hand parameters, with 2VON and the 10 µA input marked](/q/alsim-04-3-05/solution-iout.svg)

| $v_{OUT}$ | 0.3 V | 0.5 V | 1 V | 2 V | 5 V |
|---|---|---|---|---|---|
| $i_{OUT}$, LEVEL 3 (µA) | 7.32 | 7.41 | 7.48 | 7.62 | 8.01 |
| $i_{OUT}$, LEVEL 1 (µA) | 9.20 | 9.42 | 9.44 | 9.48 | 9.58 |

The curve flattens above about 0.4 V, as Step 2 predicts, but its level is well below 10 µA. The cause is the mismatch of drain–source voltages between the two mirror devices: M3 is diode connected at $V_{DS3}=0.83$ V, while M1 sits at $V_{DS1}=0.28$ V.
- In LEVEL 3, the static-feedback term (ETA) lowers the threshold by $\sigma V_{DS}$ with $\sigma\approx0.036$. M1's threshold is therefore about $0.036(0.83-0.28)=20$ mV higher than M3's. That is a large fraction of the roughly 0.14-V saturation voltage, so M1 conducts about 25% less.
- KAPPA (channel-length modulation) adds a smaller deficit. With ETA set to 0 the same deck gives 9.56 µA.
- The LEVEL-1 run with the hand parameters shows the square-law version of the same effect. There, $V_{DS1}=0.177$ V lies below $V_{ON}$, so M1 is slightly in triode, and the λ term favours the diode M3; together they give 9.48 µA.

The simulated small-signal output resistance at 2 V is 7.6 MΩ, again limited by the LEVEL-3 output conductance (about 4 µS per device) rather than by λ = 0.04 V⁻¹. The high-swing connection trades current accuracy for swing, which is the motivation for the modified circuit of the next problem.
