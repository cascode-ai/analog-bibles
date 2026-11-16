Design problem. Design a precharge buffer that has rail-to-rail input and output capability. The main duty of the precharge buffer is to charge the sampling capacitor $C_S$ at the input of an ADC close to the input voltage in a short amount of time. After this precharging phase, the input is directly connected to the sampling capacitor and fine settling is achieved over a switch, as shown in [Fig. 1] (the source $V_S$ with $R_S$ and $C_F$ drives the buffer; during PreCharge switch $Q_2$ connects the buffer output to $C_S$; during Fine Settling switch $Q_1$ connects the input node directly to $C_S$; the Sample and Convert phases of the ADC are shown in the timing diagram).

As a result of this phasing, the charge/current required from the input source is reduced. Therefore, the input impedance of the ADC is effectively increased. The reduction in the current and the increase in impedance depend on the settling performance of the precharge buffer, which is directly related to slew rate, gain-bandwidth product and gain.

Design an amplifier, $A(s)$, with a settling accuracy of 2 %, a settling time of 100 ns, a capacitive load of 10 pF and a total power dissipation of 2 mW. You may need excessive currents to have sufficient slew rate; thus, you may need to dynamically change the tail current, or you may use input structures whose slew rates are not defined by the tail current. From the settling accuracy, derive the minimum open-loop gain you should have. The design specifications are:

- GBW > 10 MHz with $C_S$ = 10 pF
- settling time < 100 ns to 2 % accuracy
- input common-mode range: rail to rail
- output swing: rail to rail, with the capacitive load
- supply: single 5 V
- power dissipation: 2 mW nominal

For the settling accuracy and settling time, use the unity-gain configuration of the op amp with a load capacitor of 10 pF; apply a step input and observe the settling time and accuracy.

Use a 0.5-µm CMOS process: the SPICE (BSIM3v3) models of the AMI C5 process published by MOSIS (run T51A preferred; any C5 run is acceptable after any syntax corrections your simulator needs). For hand calculations, typical values for this process are approximately: NMOS $V_{T} \approx 0.67$ V, $\mu_nC_{ox} \approx 113\ \mu\mathrm{A/V^2}$; PMOS $V_{T} \approx -0.92$ V, $\mu_pC_{ox} \approx 38\ \mu\mathrm{A/V^2}$; $C_{ox} \approx 2.45$ fF/µm²; minimum drawn channel length 0.6 µm.

The design is scored as follows, with every value entered taken from computer simulation:
$$\text{SCORE} = 20\min\left[1, \left(\frac{2}{\text{settling accuracy in \%}}\right)^2\right] + 20\min\left[1, \left(\frac{2\ \text{mW}}{\text{power dissipation}}\right)^2\right] + 10\min\left[1, \frac{\text{GBW}}{10\ \text{MHz}}\right] + 20\min\left[1, \frac{\text{ICMR (V)}}{5\ \text{V}}\right] + 10\min\left[1, \frac{\text{output swing (V)}}{5\ \text{V}}\right]$$
You are responsible for providing the supporting information necessary to verify how you determined your SCORE, along with a labeled schematic of your circuit.
