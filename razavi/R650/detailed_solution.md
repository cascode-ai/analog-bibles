# Detailed solution - R650

**Approach.** The phase detector (PD) output consists of a dc (slowly varying) part that carries the phase error, plus high-frequency components at the input frequency and its harmonics. In lock the VCO needs a steady control voltage, a dc level that must come through the filter. A high-pass filter blocks exactly that dc part and passes exactly the unwanted high-frequency part; the linear phase-domain model of the loop confirms this.

### Step 1 — The signals in the loop

The VCO obeys $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$, where $\omega_0$ is its free-running frequency (at $V_{cont} = 0$, or at the filter's reference level). The PD output contains:

- a **dc or slowly varying component**, $K_{PD}\Delta\phi$, proportional to the phase error $\Delta\phi = \phi_{in} - \phi_{out}$: the useful information;
- **high-frequency components**, pulses or ripple at the input frequency or its harmonics (for an XOR PD, a pulse train at $2\omega_{in}$ whose duty cycle encodes $\Delta\phi$): unwanted by-products.

### Step 2 — What the VCO needs in lock

In lock $\omega_{out} = \omega_{in}$ (on average), which requires a **constant** control voltage

$$V_{cont} = \frac{\omega_{in} - \omega_0}{K_{VCO}} ,$$

a nonzero dc level unless $\omega_{in} = \omega_0$ exactly. Its only source is the PD output passed through the filter, so the filter must pass dc: the PD settles at the phase error whose average output provides this level.

### Step 3 — What a high-pass filter does to dc

A high-pass filter has zero dc gain; for example,

$$H_{HPF}(s) = \frac{s}{s + \omega_H}$$

has $H_{HPF}(0) = 0$. Whatever the average PD output, the average of $V_{cont}$ is pinned at the filter's reference level (here 0). So the VCO's *average* frequency stays at $\omega_0$; a constant phase error produces only a transient correction that decays with time constant $1/\omega_H$; and the loop cannot hold $\omega_{out} = \omega_{in}$ for $\omega_{in} \ne \omega_0$, so it can neither lock nor track the input frequency.

### Step 4 — The same conclusion from the loop transfer function

In the phase domain the VCO is an integrator, $\phi_{out}/V_{cont} = K_{VCO}/s$. With the high-pass filter the loop gain is

$$G(s) = K_{PD}\cdot\frac{s}{s + \omega_H}\cdot\frac{K_{VCO}}{s} = \frac{K_{PD}K_{VCO}}{s + \omega_H}.$$

The filter's zero at the origin **cancels the VCO's integrator**, so the dc loop gain is finite, $G(0) = K_{PD}K_{VCO}/\omega_H$. For a step $\Delta\omega$ in the input frequency (frequency is the derivative of phase, so the frequency transfer function equals the phase transfer function):

$$\frac{\omega_{out}}{\omega_{in}} = \frac{G(s)}{1 + G(s)} = \frac{K_{PD}K_{VCO}}{s + \omega_H + K_{PD}K_{VCO}} ,$$

and in steady state ($s \to 0$)

$$\Delta\omega_{out} = \frac{K_{PD}K_{VCO}}{\omega_H + K_{PD}K_{VCO}}\,\Delta\omega, \qquad \Delta\omega - \Delta\omega_{out} = \frac{\omega_H}{\omega_H + K_{PD}K_{VCO}}\,\Delta\omega \ne 0 .$$

A **permanent frequency error** remains, so the phase error ramps without bound, the loop slips cycles, and $\omega_{out} = \omega_{in}$ is never reached. With a low-pass filter (dc gain 1) the VCO integrator is kept, the dc loop gain is infinite, and the steady-state frequency error is zero.

### Step 5 — What a high-pass filter does to the high-frequency components

The loop filter's second job is to suppress the high-frequency PD components. A high-pass filter passes them straight to the VCO, whose frequency is then modulated strongly at the input frequency or its harmonics, producing large sidebands (spurs) and jitter even if lock were somehow possible.

### Result

A high-pass filter cannot replace the low-pass filter because:

1. **It blocks the useful signal.** The phase-error information is the dc (average) component of the PD output, $K_{PD}\Delta\phi$. In lock the VCO needs a steady control voltage $(\omega_{in} - \omega_0)/K_{VCO}$, which must come through the filter. A high-pass filter has zero dc gain, so $V_{cont}$ is pinned at its reference level and the VCO stays at its free-running frequency. In loop terms, the filter's zero at $s = 0$ cancels the VCO integrator, leaving a permanent frequency error $\Delta\omega\,\omega_H/(\omega_H + K_{PD}K_{VCO})$, so the loop cannot lock or track.
2. **It passes the unwanted signal.** The high-frequency PD components (ripple at $\omega_{in}$ or $2\omega_{in}$) reach the VCO unattenuated and modulate its frequency, creating large ripple, sidebands and jitter.

**Common mistake.** Arguing only that "the PD output contains high-frequency components that must be removed". That explains why a filter is needed, not why it must be *low-pass*: the dc component, which a high-pass filter removes, is what sets the VCO frequency in lock.

**Common mistake.** Claiming the loop would still lock with a high-pass filter, only with more ripple or a different bandwidth. Without a dc path the VCO's average frequency cannot leave $\omega_0$, so the loop loses lock for any other input frequency.

**Common mistake.** Believing that the phase information is carried by the high-frequency PD components. Those are by-products; the phase error appears in the average value.
