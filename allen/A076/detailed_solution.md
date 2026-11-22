# Detailed solution - A076

The $\phi_1$ pulse must stay high long enough for $C_1$ to settle to the source voltage. Express the settling time through the ON resistance of M1 and the capacitance, then see how each proposed change affects it and the feedthrough.

### Step 1 — What sets the minimum pulse width

While $\phi_1$ is high, M1 is a nonsaturated switch with ON resistance

$$
r_{ON}=\frac{1}{K'(W/L)(V_{GS}-V_T)}=\frac{L}{K'W(V_{GS}-V_T)},
$$

and $C_1$ charges with time constant $\tau=r_{ON}C_1$. Settling to a given accuracy $\varepsilon$ takes a fixed number of time constants, $t=\tau\ln(1/\varepsilon)$ (4.6τ for 1%), so the minimum high time of $\phi_1$ scales as

$$
t_{\phi_1}\propto r_{ON}C_1\propto\frac{C_1L}{W}.
$$

### Step 2 — Effect of the two changes

The feedthrough error on $C_1$ grows with the switch charge and shrinks with the hold capacitance, roughly as $(W\cdot\mathrm{CGDO}+WLC_{ox}/2)/C_1$. The two remedies affect the pulse as follows:

| Change | Feedthrough | $r_{ON}$ or $C_1$ | Required $\phi_1$ width |
|---|---|---|---|
| Smaller M1 (smaller $W$) | smaller (less overlap and channel charge) | $r_{ON}\propto1/W$ rises | longer |
| Larger $C_1$ | smaller (same charge on a larger capacitor) | $\tau\propto C_1$ rises | longer |

For example, halving $W$ or doubling $C_1$ doubles $\tau$ and therefore doubles the required pulse width. (Increasing $L$ also raises $r_{ON}$, and it adds channel charge, so it is not a way to reduce feedthrough.)

### Step 3 — Conclusion

Both changes require a wider (longer) $\phi_1$ pulse, because both increase the time constant $r_{ON}C_1$ that the pulse must cover. The reduction in charge feedthrough is bought with speed: the maximum clock rate of the switched circuit falls in proportion.
