# Golden Solution - A108

## Reference answer

[Fig. 1] injects far less current into the substrate than [Fig. 2].

- [Fig. 1]: isolated vertical npn transistors (emitter n⁺, base p, collector in an n-well/deep n-well isolated from the p-substrate). Their collector currents flow to the PMOS mirror and $R_1$, not into the substrate; the only substrate current is the leakage of the reverse-biased collector–substrate (isolation) junction, picoamperes to nanoamperes.
- [Fig. 2]: in a p-substrate CMOS process the grounded-cathode diodes are p⁺/n-well junctions with the n-well tied to ground. Each is really a parasitic substrate pnp (p⁺ emitter, n-well base, p-substrate collector), so a fraction β/(β + 1) of each diode current, almost all of $I_1$, $I_2$ and $I_3$, is collected by the substrate.
- Substrate current causes substrate potential drops, couples noise to other circuits and can trigger latch-up, which is the reason to prefer the isolated-transistor version.

## Grading notes

+2: [Fig. 1] has much less substrate current, because isolated vertical transistors return their collector current to the circuit (only junction leakage reaches the substrate), whereas the diodes of [Fig. 2] act as substrate pnp transistors and dump most of their current into the substrate. +1: correct comparison with an incomplete explanation. 0: a discussion of substrate currents without a clear comparison. −2 (asserted as fact): [Fig. 2] claimed to inject less substrate current, or both said to inject the same.
