# Golden Solution - A335

## Reference answer

Use Miller compensation around each output inverter: a capacitor $C_c$ (preferably in series with a nulling resistor $R_z$) from each output ($v_{out}^+$, $v_{out}^-$) back to the input of the same inverter (the corresponding first-stage output node).

- Each signal path has two high-impedance nodes (first-stage output and inverter output); the push–pull inverter is an inverting stage with transconductance $g_{mN} + g_{mP}$ and gain $(g_{mN}+g_{mP})(r_{dsN}\|r_{dsP})$, so Miller compensation splits the poles as in a two-stage op amp.
- Design relations: $GB = g_{m1}/C_c$; $p_2 \approx -(g_{mN}+g_{mP})/C_L$ (larger than for a single common-source device, so a smaller $C_c$ suffices); RHP zero at $(g_{mN}+g_{mP})/C_c$, removed with $R_z \ge 1/(g_{mN}+g_{mP})$; for 60° phase margin $|p_2| \ge 2.2\,GB$, i.e., $C_c \ge 2.2\,g_{m1}C_L/(g_{mN}+g_{mP})$.
- The output common-mode level (and the inverter bias) is not defined by this circuit; a common-mode feedback loop acting on the first stage is needed.

## Grading notes

+2: one Miller capacitor (± nulling resistor) around each inverter, output to its own input, with the two-high-impedance-node reasoning; using $g_{mN} + g_{mP}$ for the second stage is a plus; CMFB mention a plus. +1: correct placement without explanation. 0: compensation by load capacitance only, presented tentatively. −2 (asserted as fact): load capacitance alone claimed sufficient, capacitors cross-connected between opposite sides, or a capacitor across the first stage only.
