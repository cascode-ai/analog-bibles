# Detailed solution - alsim-04-3-07

The high-swing sink of [Fig. 2] loses accuracy because its diode M3 runs at $V_{DS3}\approx V_{GS}$ while M1 runs at only a few hundred millivolts. [Fig. 1] puts a copy of the cascode device, called M5 below, on top of M3 and takes the gate of M3 and M1 from M5's drain. The two lower devices then see the same $V_{GS}$ and nearly the same $V_{DS}$. Simulate both circuits with the LEVEL-3 card and compare $i_{OUT}$.

### Step 1 — How the modified bias branch works

M5 (4/1) has its gate on the M4/M2 gate line, $V_{G}=V_T+2V_{ON}\approx1.13$ V, and carries the same 10 µA as M2. Two identical devices with the same gate voltage and current have the same $V_{GS}$, so M5 holds the drain of M3 at the same voltage that M2 holds at the drain of M1:

$$
V_{DS3}=V_G-V_{GS5}\approx V_G-V_{GS2}=V_{DS1}\approx V_{ON}.
$$

The feedback from M5's drain to the gate of M3 then sets $V_{GS3}$ to whatever value makes M3 conduct exactly 10 µA at that low $V_{DS}$, whether M3 is just saturated or slightly in triode. M1, with the same $V_{GS}$ and $V_{DS}$, copies that current, so channel-length modulation and drain-induced threshold shifts cancel to first order. The output side, and hence $V_{OUT}(\min)\approx2V_{ON}\approx0.4$ V and $r_{out}$, are those of the original high-swing cascode.

### Step 2 — Simulation decks

```spice
* alsim-04-3-07 Fig. 1: modified high-swing sink, LEVEL 3
I4 0 4 DC 10U
I3 0 5 DC 10U
M4 4 4 0 0 N3 W=1U L=1U
M5 5 4 3 0 N3 W=4U L=1U
M3 3 5 0 0 N3 W=4U L=1U
M1 1 5 0 0 N3 W=4U L=1U
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

For [Fig. 2], M5 is removed, the second 10-µA source feeds node 3 directly, and M3 and M1 take their gates from node 3 (M3 diode connected). All bulks are grounded, and $i_{OUT}=-I(\mathrm{VOUT})$.

### Step 3 — Operating points at $v_{OUT}=2$ V

| Quantity | [Fig. 1] | [Fig. 2] |
|---|---|---|
| Gate of M3, M1 | 0.856 V | 0.830 V |
| $V_{DS3}$ | 0.226 V | 0.830 V |
| $V_{DS1}$ | 0.262 V | 0.282 V |
| $i_{OUT}$ | **10.19 µA** | **7.62 µA** |

In [Fig. 1] the two drain voltages agree to within 36 mV. In [Fig. 2] they differ by 0.55 V, which through the LEVEL-3 static-feedback term ($\sigma\approx0.036$) and channel-length modulation costs M1 about a quarter of its current.

### Step 4 — Output characteristics

![Simulated iOUT versus vOUT for the modified sink of Fig. 1 and the original high-swing sink of Fig. 2, both with the LEVEL-3 model](/q/alsim-04-3-07/solution-iout.svg)

| $v_{OUT}$ | 0.5 V | 1 V | 2 V | 5 V |
|---|---|---|---|---|
| [Fig. 1] $i_{OUT}$ (µA) | 9.93 | 10.03 | 10.19 | 10.67 |
| [Fig. 2] $i_{OUT}$ (µA) | 7.41 | 7.48 | 7.62 | 8.01 |

With the modification, $i_{OUT}$ stays within 1% of 10 µA from 0.36 to 1.44 V and is 1.9% high at 2 V. It is exactly 10 µA near $v_{OUT}\approx0.86$ V, where M2's $V_{DS}$ equals M5's, so the whole output stack mirrors the bias stack. Above that, the residual rise with $v_{OUT}$ is the finite output resistance (about 6 MΩ with this card), not a mirror error. The knee is still near 0.3–0.4 V, so the swing advantage of the high-swing connection is kept. The original circuit is 24% low at every output voltage.

A LEVEL-1 run with the hand parameters shows the same ranking with smaller errors: 10.06 µA for [Fig. 1] against 9.48 µA for [Fig. 2] at 2 V. The improvement comes from equalising the drain–source voltages of M3 and M1, not from a higher output resistance.
