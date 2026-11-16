# Detailed solution - R579

**Approach.** When the switch turns off, part of the channel charge lands on $C_H$ (**charge injection**), and the falling gate couples to the output through the gate–drain overlap (**clock feedthrough**). Find the input level at which the channel charge is largest, convert it to a voltage step on $C_H$, compute the capacitive-divider feedthrough step, and compare.

### Step 1 — Channel charge and where it is largest

While CK is high, the switch is in deep triode with $V_{DS} \approx 0$ and a uniform channel (no 2/3 factor, which applies only in saturation). With source and drain at about $V_{in}$:

$$Q_{ch} = WLC_{ox}\,(V_{GS} - V_{TH}) = WLC_{ox}\,(V_{DD} - V_{in} - V_{TH}),$$

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{in}} - \sqrt{2|\phi_F|}\right).$$

Raising $V_{in}$ reduces the overdrive directly and through the body effect, so $Q_{ch}$ is **largest at $V_{in} = 0$**, where $V_{SB} = 0$ and $V_{TH} = V_{TH0} = 0.7$ V:

$$WLC_{ox} = (20\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 38.4\ \mathrm{fF},$$

$$Q_{ch} = (38.4\ \mathrm{fF})(3 - 0 - 0.7\ \mathrm{V}) = (38.4\ \mathrm{fF})(2.3\ \mathrm{V}) = 88.3\ \mathrm{fC}.$$

### Step 2 — Charge-injection error

How the channel charge splits between source and drain depends on the impedances and the clock edge speed. Two standard bounds:

- **Worst case**, all of it onto $C_H$:
$$\Delta V = \frac{Q_{ch}}{C_H} = \frac{88.3\ \mathrm{fC}}{1\ \mathrm{pF}} = 88\ \mathrm{mV}.$$
- **Half** onto $C_H$ (the common symmetric-split estimate):
$$\Delta V = \frac{Q_{ch}}{2C_H} = 44\ \mathrm{mV}.$$

The channel charge is electrons, so **$V_{out}$ drops**: a negative pedestal. Its dependence on the input level (all charge to $C_H$, body effect included):

| $V_{in}$ (V) | $V_{TH}$ (V) | Overdrive (V) | $\Delta V$ (mV) |
|---|---|---|---|
| 0 | 0.700 | 2.300 | 88.3 |
| 0.5 | 0.806 | 1.695 | 65.1 |
| 1.0 | 0.893 | 1.107 | 42.5 |
| 1.5 | 0.970 | 0.530 | 20.3 |

(For example, at $V_{in} = 1$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) = 0.7 + 0.45(1.378 - 0.949) = 0.893$ V.) The error falls with $V_{in}$, nonlinearly because of the body effect, so charge injection produces gain error and distortion, not just an offset.

### Step 3 — Clock-feedthrough error

The overlap capacitance is

$$WC_{ov} = (20\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 8\ \mathrm{fF}.$$

With the switch off and the output floating, $WC_{ov}$ and $C_H$ form a capacitive divider from the gate, so a gate step $\Delta V_{CK}$ gives

$$\Delta V = \Delta V_{CK}\,\frac{WC_{ov}}{WC_{ov} + C_H}.$$

For the full clock swing $\Delta V_{CK} = V_{DD} = 3$ V (worst case):

$$\Delta V = (3\ \mathrm{V})\times\frac{8\ \mathrm{fF}}{8\ \mathrm{fF} + 1000\ \mathrm{fF}} = 3\ \mathrm{V}\times7.94\times10^{-3} = 23.8\ \mathrm{mV},$$

also negative (the clock falls) and **independent of $V_{in}$**: a pure offset.

### Step 4 — Comparison

| Error | Value | Depends on $V_{in}$? |
|---|---|---|
| Charge injection, all to $C_H$ (at $V_{in} = 0$) | 88 mV | yes (falls as $V_{in}$ rises) |
| Charge injection, half to $C_H$ (at $V_{in} = 0$) | 44 mV | yes |
| Clock feedthrough | 24 mV | no |

$$\frac{88\ \mathrm{mV}}{23.8\ \mathrm{mV}} = 3.7, \qquad \frac{44\ \mathrm{mV}}{23.8\ \mathrm{mV}} = 1.9 .$$

Charge injection is larger by a factor of about 3.7 (worst case) or 1.9 (half-split), and since both pull the output down, the worst-case total is about 110 mV. Injection dominates because it scales with the whole gate area and the overdrive, while feedthrough scales only with the narrow overlap ($WC_{ov} = 8$ fF against $WLC_{ox} = 38.4$ fF). The constant feedthrough offset is easily removed (for example differentially); the input-dependent injection is the more harmful error.

### Result

The maximum charge-injection error occurs at $V_{in} = 0$, where $V_{SB} = 0$ and $V_{TH} = 0.7$ V:

$$Q_{ch} = WLC_{ox}(V_{DD} - V_{in} - V_{TH}) = 38.4\ \mathrm{fF}\times2.3\ \mathrm{V} = 88.3\ \mathrm{fC},$$

giving $\Delta V = 88$ mV in the worst case (all the charge onto $C_H$) or 44 mV if half goes to $C_H$. It is a negative pedestal.

Clock feedthrough gives $\Delta V = V_{DD}\,WC_{ov}/(WC_{ov} + C_H) = 3\ \mathrm{V}\times8\ \mathrm{fF}/1008\ \mathrm{fF} \approx 24$ mV, independent of $V_{in}$.

Charge injection is about 3.7× larger (about 1.9× with the half-split assumption). It also shrinks as $V_{in}$ rises (faster with body effect), which produces gain error and nonlinearity, whereas the feedthrough is a constant offset.

**Common mistake.** Using $Q_{ch} = WLC_{ox}V_{DD}$ (forgetting $V_{in}$ and $V_{TH}$), which gives 115 mV, or including a 2/3 factor as for a saturated device. The on-switch is in deep triode, and its charge is set by the overdrive $V_{DD} - V_{in} - V_{TH}$.

**Common mistake.** Evaluating the injection at some mid-range input and calling it the maximum, or claiming that both errors are independent of the input. The injection is largest at the lowest input and decreases with $V_{in}$; only the feedthrough is input-independent.

**Common mistake.** Concluding that clock feedthrough is the larger error. The overlap capacitance (0.4 fF/μm, i.e. 8 fF) is much smaller than the channel's gate capacitance (38.4 fF), so the feedthrough step (24 mV) is several times smaller.
