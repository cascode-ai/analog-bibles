考虑 [图 1] 所示的射极耦合对（emitter-coupled pair），对其进行修改：在每个晶体管的发射极串联一个发射极负反馈（emitter degeneration）电阻 $R_E = 4\ \mathrm{k\Omega}$（每个发射极各自经一个 4-kΩ 电阻连接到公共尾节点）。尾电流源为 $I_{\text{TAIL}} = 20\ \mu$A 并联 $R_{\text{TAIL}} = 10\ \mathrm{M\Omega}$；$R_C = 100\ \mathrm{k\Omega}$；$V_{EE} = V_{CC} = 5$ V；直流输入电压为零。求差模增益（differential-mode gain）、共模增益（common-mode gain）、差模输入电阻和共模输入电阻，并计算 CMRR。忽略 $r_b$、$r_o$ 和 $r_\mu$。

定义：$v_{id} = v_{i1} - v_{i2}$，$v_{ic} = (v_{i1}+v_{i2})/2$，$v_{od} = v_{o1} - v_{o2}$，$v_{oc} = (v_{o1}+v_{o2})/2$；$A_{dm} = v_{od}/v_{id}$（$v_{ic} = 0$），$A_{cm} = v_{oc}/v_{ic}$（$v_{id} = 0$）；纯差模输入时 $R_{id} = v_{id}/i_b$，纯共模输入时 $R_{ic} = v_{ic}/i_b$（$i_b$ 为一个晶体管的基极电流）；CMRR $= |A_{dm}/A_{cm}|$。

npn 晶体管参数：$\beta_F = \beta_0 = 200$，$I_S = 5\times10^{-15}$ A，$V_T = 26$ mV。
