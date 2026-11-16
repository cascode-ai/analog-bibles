# Detailed solution - R650

**Approach.** Look at what the phase detector (PD) produces and what the VCO needs. The PD output consists of a DC (slowly varying) part that carries the phase error, plus high-frequency components at the input frequency and its harmonics. In lock, the VCO needs a steady control voltage, i.e. a DC level, delivered through the filter. A high-pass filter blocks exactly that DC part and passes exactly the unwanted high-frequency part. We confirm the conclusion with the linear phase-domain model of the loop.

### Step 1 — The loop and the signals in it

Reading the figure: the PD compares the input phase $\phi_{in}$ with the VCO output phase $\phi_{out}$ and produces $V_{PD}$. A low-pass filter (LPF) turns $V_{PD}$ into the control voltage $V_{cont}$, and the VCO output is fed back to the PD.

The VCO frequency follows its control voltage:

$$\omega_{out} = \omega_0 + K_{VCO}V_{cont},$$

where $\omega_0$ is the free-running frequency (at $V_{cont} = 0$, or at the filter's reference level) and $K_{VCO}$ is the VCO gain in rad/s/V.

The PD output has two kinds of content:

- a **DC or slowly varying component**, $K_{PD}\Delta\phi$, proportional to the phase error $\Delta\phi = \phi_{in} - \phi_{out}$. This is the useful information.
- **high-frequency components**: pulses or ripple at the input frequency or its harmonics. For an XOR PD, for example, the output is a pulse train at $2\omega_{in}$ whose duty cycle encodes $\Delta\phi$. These are unwanted by-products.

### Step 2 — What the VCO needs in lock

In lock, the output frequency must equal the input frequency, $\omega_{out} = \omega_{in}$, at every instant (on average). From the VCO equation, this requires a **constant** control voltage:

$$V_{cont} = \frac{\omega_{in} - \omega_0}{K_{VCO}} .$$

Unless $\omega_{in}$ happens to equal $\omega_0$ exactly, this is a nonzero DC level. The only source of $V_{cont}$ is the PD output passed through the filter, so the filter must pass DC: the PD settles at the phase error whose average output, passed through the filter, provides this level.

### Step 3 — What a high-pass filter does to DC

A high-pass filter has zero gain at DC. For example, the first-order high-pass filter

$$H_{HPF}(s) = \frac{s}{s + \omega_H}$$

has $H_{HPF}(0) = 0$. Whatever the average PD output is, the average of $V_{cont}$ is pinned at the filter's reference level (here 0). Consequently:

- the VCO's *average* frequency stays at its free-running value $\omega_0$;
- a constant phase error produces only a transient correction that decays with time constant $1/\omega_H$;
- the loop cannot hold $\omega_{out} = \omega_{in}$ when $\omega_{in} \ne \omega_0$, so it cannot lock, and it cannot track changes of the input frequency.

### Step 4 — The same conclusion from the loop transfer function

In the phase domain, the VCO is an integrator, $\phi_{out}/V_{cont} = K_{VCO}/s$, because phase is the integral of frequency. With the high-pass filter, the loop gain is

$$G(s) = K_{PD}\cdot\frac{s}{s + \omega_H}\cdot\frac{K_{VCO}}{s} = \frac{K_{PD}K_{VCO}}{s + \omega_H}.$$

The filter's zero at the origin **cancels the VCO's integrator**, so the DC loop gain becomes finite, $G(0) = K_{PD}K_{VCO}/\omega_H$.

Apply a step $\Delta\omega$ in the input frequency. Frequency is the derivative of phase, so the frequency transfer function equals the phase transfer function:

$$\frac{\omega_{out}}{\omega_{in}} = \frac{G(s)}{1 + G(s)} = \frac{K_{PD}K_{VCO}}{s + \omega_H + K_{PD}K_{VCO}} .$$

In steady state ($s \to 0$):

$$\Delta\omega_{out} = \frac{K_{PD}K_{VCO}}{\omega_H + K_{PD}K_{VCO}}\,\Delta\omega, \qquad \Delta\omega - \Delta\omega_{out} = \frac{\omega_H}{\omega_H + K_{PD}K_{VCO}}\,\Delta\omega \ne 0 .$$

A **permanent frequency error** remains. A frequency error means that the phase error grows without bound (it ramps), so the PD output cycles through its characteristic, the loop slips cycles, and $\omega_{out} = \omega_{in}$ is never reached. By contrast, with a low-pass filter (DC gain 1) the integrator of the VCO is kept, the DC loop gain is infinite, and the steady-state frequency error is zero.

### Step 5 — What a high-pass filter does to the high-frequency components

The second job of the loop filter is to suppress the high-frequency components of the PD output. A high-pass filter does the opposite: it passes them straight to the VCO. The VCO frequency would then be modulated strongly at the input frequency or its harmonics, producing large sidebands (spurs) and jitter at the output, even if lock were somehow possible.

### Result

A high-pass filter cannot replace the low-pass filter because:

1. **It blocks the useful signal.** The phase-error information is the DC (average) component of the PD output, $K_{PD}\Delta\phi$. In lock the VCO needs a steady control voltage $(\omega_{in} - \omega_0)/K_{VCO}$, which must come through the filter. A high-pass filter has zero DC gain, so $V_{cont}$ is pinned at its reference level and the VCO stays at its free-running frequency. In loop terms, the filter's zero at $s = 0$ cancels the VCO integrator, leaving a permanent frequency error $\Delta\omega\,\omega_H/(\omega_H + K_{PD}K_{VCO})$, so the loop cannot lock or track.
2. **It passes the unwanted signal.** The high-frequency PD components (ripple at $\omega_{in}$ or $2\omega_{in}$) reach the VCO unattenuated and modulate its frequency, creating large ripple, sidebands and jitter.

**Common mistake.** Arguing only that "the PD output contains high-frequency components that must be removed". That explains why a filter is needed, but not why it must be *low-pass*: the essential point is that the DC component, which a high-pass filter removes, is what sets the VCO frequency in lock.

**Common mistake.** Claiming that the loop would still lock with a high-pass filter, only with more ripple or a different bandwidth. Without a DC path the VCO's average frequency cannot move away from its free-running value, so the loop loses lock for any input frequency other than $\omega_0$.

**Common mistake.** Believing that the phase information is carried by the high-frequency components of the PD output. Those components are by-products of the detection; the phase error appears in the average value.
