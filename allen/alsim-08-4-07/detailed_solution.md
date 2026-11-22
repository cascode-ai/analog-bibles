# Detailed solution - alsim-08-4-07

Read the trip points from [Fig. 2], re-derive the switching condition, and recompute the trip points with the correct transconductance parameter. The main discrepancy comes from an arithmetic slip in the given hand calculation, not from the theory. Once that is fixed, a re-simulation shows that only small second-order effects remain.

### Step 1 — What the simulation shows

In [Fig. 2], $v_{o2}$ stays near 2.5 V for negative inputs and falls to about 1.2 V for positive inputs. On the way up it switches at about $v_{in}=+0.09$ V, and on the way down at about $-0.10$ V. The loop is nearly symmetric, about ±0.09–0.10 V, against the calculated ±0.136 V.

### Step 2 — The switching condition is right

With $v_{in}$ very negative, M1 carries the tail current through its diode load M3. M6 (five times M3) mirrors $5i_3$ into $v_{o2}$, holding it high, while M4 and M7 are off. The output can switch once M2 absorbs all of M6's current, $i_2=i_6=5i_1$. With $i_1+i_2=i_5=20\ \mu$A:

$$
i_1=\frac{i_5}{6}=3.33\ \mu\mathrm A,\qquad i_2=\frac{5i_5}{6}=16.67\ \mu\mathrm A,\qquad V_{TRP}^+=v_{GS2}-v_{GS1},
$$

and the negative trip point follows by symmetry with M7 and M4. This part of the given development is correct. M1 and M2 share their source node, so their thresholds, including the body effect, are equal and cancel in $v_{GS2}-v_{GS1}$.

### Step 3 — The error: β was halved

The calculation used $(5)(110)=550\ \mu\mathrm{A/V^2}$ in $v_{GS}=V_T+\sqrt{2i/\beta}$. For $W/L=10\ \mu\mathrm m/1\ \mu\mathrm m$,

$$
\beta=K'_N\frac WL=(110\ \mu\mathrm{A/V^2})(10)=1100\ \mu\mathrm{A/V^2}.
$$

The factor 5 seems to come from treating $K'(W/L)/2$ as the β of $\sqrt{2i/\beta}$; the ½ is then applied twice. Using 550 overstates both overdrives by $\sqrt2$. Corrected:

$$
v_{GS1}-V_T=\sqrt{\frac{2(3.33\ \mu)}{1100\ \mu}}=0.078\ \mathrm V,\qquad
v_{GS2}-V_T=\sqrt{\frac{2(16.67\ \mu)}{1100\ \mu}}=0.174\ \mathrm V,
$$

$$
V_{TRP}^{\pm}=\pm(0.174-0.078)=\pm0.096\ \mathrm V,
$$

within about 0.01 V of [Fig. 2].

### Step 4 — Re-simulation

The circuit was re-simulated with LEVEL-1 models ($K'$, $V_T$, γ and λ as given, with typical capacitances) and $i_5=20\ \mu$A. The deck models the comparator of [Fig. 1] with its tail current mirrored from a bias source `IB`, here set to 20 µA, and $v_{in}$ is a slow triangle between −0.5 V and +0.5 V.

![Simulated hysteresis loop of vo2 versus vin for i5 = 20 µA, with the corrected hand trip points of ±0.096 V dotted](/q/alsim-08-4-07/solution-hysteresis.svg)

| | Given hand calculation | Corrected hand | Re-simulation (level 1) | [Fig. 2] |
|---|---|---|---|---|
| $V_{TRP}^+$ | +0.136 V | +0.096 V | +0.092 V | ≈ +0.09 V |
| $V_{TRP}^-$ | −0.136 V | −0.096 V | −0.092 V | ≈ −0.10 V |
| $v_{o2}$ low level | — | — | 1.18 V | ≈ 1.2 V |

The re-simulation reproduces [Fig. 2]: the same output levels (2.5 V and about 1.2 V) and trip points within 0.01 V.

### Step 5 — Remaining differences

The last few millivolts between the corrected hand values and the simulations have several sources.
- **Channel-length modulation.** M6 and M3 operate at different $V_{SD}$, and so do M1 and M2, so $i_6/i_3$ is not exactly 5.
- **Regeneration onset.** Regeneration begins when the positive-feedback loop gain $g_{m6}/g_{m3}$ times the pair's split passes unity, slightly before $i_2$ fully equals $i_6$.
- **Model.** The simulator used for [Fig. 2] may have a more complete model (mobility degradation, a different saturation voltage) than the square law.
- **Slope.** The simulated transition has a finite slope and unequal output levels, which makes reading the trip point slightly ambiguous.

None of these is large. The body effect, often blamed, plays no role, since it cancels between M1 and M2. The poor match in the original comparison is due to β = 550 instead of 1100 µA/V².
