# Detailed solution - R579

**Approach.** When the NMOS switch turns off, two things disturb the held voltage. First, the mobile charge in the inversion channel must leave the device, and part of it lands on $C_H$ (**charge injection**). Second, the falling gate couples to the output through the gate–drain overlap capacitance (**clock feedthrough**). Compute the channel charge, find the input level at which it is largest, convert it to a voltage step on $C_H$, compute the capacitive-divider feedthrough step, and compare the two.

### Step 1 — The channel charge of a switch in the on state

While CK is high, the switch is on in deep triode with $V_{DS} \approx 0$. The channel is then uniform along its length, and its total (electron) charge is the gate-oxide capacitance times the overdrive:

$$Q_{ch} = WLC_{ox}\,(V_{GS} - V_{TH}) = WLC_{ox}\,(V_{DD} - V_{in} - V_{TH}).$$

Here $V_{GS} = V_{DD} - V_{in}$ because the source (and drain) sit at about $V_{in}$. Note that this is the full triode expression; the factor 2/3 applies only to a saturated device.

The threshold includes the body effect, since the bulk is grounded and the source is at $V_{in}$:

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{in}} - \sqrt{2|\phi_F|}\right).$$

### Step 2 — Where the error is largest

$Q_{ch}$ is proportional to $V_{DD} - V_{in} - V_{TH}$. Raising $V_{in}$ reduces the overdrive in two ways: directly, through $-V_{in}$, and through the body effect, which raises $V_{TH}$. The channel charge is therefore **largest at the lowest input, $V_{in} = 0$**, where $V_{SB} = 0$ and $V_{TH} = V_{TH0} = 0.7$ V.

**Gate capacitance:**

$$WLC_{ox} = (20\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 38.4\ \mathrm{fF}.$$

**Channel charge at $V_{in} = 0$:**

$$Q_{ch} = (38.4\ \mathrm{fF})(3 - 0 - 0.7\ \mathrm{V}) = (38.4\ \mathrm{fF})(2.3\ \mathrm{V}) = 88.3\ \mathrm{fC}.$$

### Step 3 — Charge-injection error

When the switch turns off, the channel charge exits through the source and the drain. How it splits depends on the impedances and the clock edge speed. Two standard bounds:

- **Worst case**, all of it onto $C_H$:
$$\Delta V = \frac{Q_{ch}}{C_H} = \frac{88.3\ \mathrm{fC}}{1\ \mathrm{pF}} = 88\ \mathrm{mV}.$$
- **Half** onto $C_H$ (the common symmetric-split estimate):
$$\Delta V = \frac{Q_{ch}}{2C_H} = 44\ \mathrm{mV}.$$

The channel charge consists of electrons, so the injected charge is negative and **$V_{out}$ drops**: a negative pedestal.

**Dependence on the input level** (all charge to $C_H$, body effect included):

| $V_{in}$ (V) | $V_{TH}$ (V) | Overdrive (V) | $\Delta V$ (mV) |
|---|---|---|---|
| 0 | 0.700 | 2.300 | 88.3 |
| 0.5 | 0.806 | 1.695 | 65.1 |
| 1.0 | 0.893 | 1.107 | 42.5 |
| 1.5 | 0.970 | 0.530 | 20.3 |

(For example, at $V_{in} = 1$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) = 0.7 + 0.45(1.378 - 0.949) = 0.893$ V.) The error falls with $V_{in}$, and nonlinearly because of the body effect. So charge injection produces a gain error and distortion, not just an offset.

### Step 4 — Clock-feedthrough error

The gate overlaps the output-side diffusion by an overlap capacitance

$$WC_{ov} = (20\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 8\ \mathrm{fF}.$$

Once the switch is off, the output node is floating, and $WC_{ov}$ and $C_H$ form a **capacitive divider** from the gate to ground. A gate step $\Delta V_{CK}$ produces, by charge conservation on the output node,

$$\Delta V = \Delta V_{CK}\,\frac{WC_{ov}}{WC_{ov} + C_H}.$$

Taking the full clock swing $\Delta V_{CK} = V_{DD} = 3$ V as a worst case:

$$\Delta V = (3\ \mathrm{V})\times\frac{8\ \mathrm{fF}}{8\ \mathrm{fF} + 1000\ \mathrm{fF}} = 3\ \mathrm{V}\times7.94\times10^{-3} = 23.8\ \mathrm{mV}.$$

This step is also negative (the clock falls). It does **not** depend on $V_{in}$, so it is a pure offset.

### Step 5 — Comparison

| Error | Value | Depends on $V_{in}$? |
|---|---|---|
| Charge injection, all to $C_H$ (at $V_{in} = 0$) | 88 mV | yes (falls as $V_{in}$ rises) |
| Charge injection, half to $C_H$ (at $V_{in} = 0$) | 44 mV | yes |
| Clock feedthrough | 24 mV | no |

$$\frac{88\ \mathrm{mV}}{23.8\ \mathrm{mV}} = 3.7, \qquad \frac{44\ \mathrm{mV}}{23.8\ \mathrm{mV}} = 1.9 .$$

Charge injection is the larger error, by a factor of about 3.7 (worst case) or 1.9 (half-split). Both pull the output down, so in the worst case they add up to about 110 mV.

**Why injection dominates.** The channel charge scales with the whole gate area and the overdrive, $WLC_{ox}(V_{DD} - V_{in} - V_{TH})$. The feedthrough scales only with the narrow overlap, $WC_{ov} \ll WLC_{ox}$ (8 fF against 38.4 fF here). A constant offset like the feedthrough is easily removed, for example differentially. The input-dependent injection is the more harmful of the two.

### Result

The maximum charge-injection error occurs at $V_{in} = 0$, where $V_{SB} = 0$ and $V_{TH} = 0.7$ V:

$$Q_{ch} = WLC_{ox}(V_{DD} - V_{in} - V_{TH}) = 38.4\ \mathrm{fF}\times2.3\ \mathrm{V} = 88.3\ \mathrm{fC},$$

giving $\Delta V = 88$ mV in the worst case (all the charge onto $C_H$) or 44 mV if half goes to $C_H$. It is a negative pedestal.

Clock feedthrough gives $\Delta V = V_{DD}\,WC_{ov}/(WC_{ov} + C_H) = 3\ \mathrm{V}\times8\ \mathrm{fF}/1008\ \mathrm{fF} \approx 24$ mV, independent of $V_{in}$.

Charge injection is about 3.7× larger (about 1.9× with the half-split assumption). It also shrinks as $V_{in}$ rises (faster with body effect), which produces gain error and nonlinearity, whereas the feedthrough is a constant offset.

**Common mistake.** Using $Q_{ch} = WLC_{ox}V_{DD}$ (forgetting $V_{in}$ and $V_{TH}$), which gives 115 mV, or including a 2/3 factor as for a saturated device. The on-switch is in deep triode with a uniform channel, and its charge is set by the overdrive $V_{DD} - V_{in} - V_{TH}$.

**Common mistake.** Evaluating the injection at some mid-range input and calling it the maximum, or claiming that both errors are independent of the input. The injection is largest at the lowest input level and decreases with $V_{in}$. Only the feedthrough is input-independent.

**Common mistake.** Concluding that clock feedthrough is the larger error. The overlap capacitance (0.4 fF/μm, i.e. 8 fF) is much smaller than the channel's gate capacitance (38.4 fF), so the feedthrough step (24 mV) is several times smaller than the injection step.
