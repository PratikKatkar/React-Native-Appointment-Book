import React, {useState} from 'react';
import {
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,TextInput
} from 'react-native';
import {Button,Divider} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const url = 'http://13.233.217.107:8080/api/AddAppointment';

  const [Title, SetTitle] = useState('');
  const [DoctorId, setDoctorId] = useState('45346070');
  const [UserId, setUserId] = useState('810459219');
  const [ClinicId, setClinicId] = useState('122990548');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Patient_BP, setPatient_BP] = useState('');
  const [Patient_Plus, setPatient_Plus] = useState('');
  const [Patient_SPO2, setPatient_SPO2] = useState('');
  const [Patient_Temp, setPatient_Temp] = useState('');
  const [Patient_Weight, setPatient_Weight] = useState('');
  const [Patient_Height, setPatient_Height] = useState('');
  const [ShortNote, setShortNote] = useState('');
  const [Address, setAddress] = useState('');
  const [PrescriptionNote, setPrescriptionNote] = useState('');
  // const [AppointmentDate, setAppointmentDate] = useState(new Date());
  // const [AppointmentTime, setAppointmentTime] = useState(new Date());
  const [AppointmentDate, setAppointmentDate] = useState("12-12-1221");
  const [AppointmentTime, setAppointmentTime] = useState("12:12");
  const [BookedDate, setBookedDate] = useState('12-12-112');
  const [AppointmentChannel, setAppointmentChannel] = useState('yes');
  const [AppointmentStatus, setAppointmentStatus] = useState('Active');
  const [AppointmentType, setAppointmentType] = useState('1');
  const [value, setValue] = useState(null);


  function saveUser(){
  
  
    let data={UserId,ClinicId,DoctorId,Title,AppointmentDate,AppointmentTime,AppointmentStatus,AppointmentChannel,
      AppointmentType, FirstName,LastName,BookedDate, Patient_BP,Patient_Plus,Patient_SPO2,Patient_Temp,
      Patient_Weight,Patient_Height,ShortNote,PrescriptionNote}
     var AppointmentStatus="active";
     
     var AppointmentChannel="yes";
     data['AppointmentChannel']=AppointmentChannel;
    
    data['AppointmentStatus']=AppointmentStatus;
    console.log(data);

    fetch("http://13.233.217.107:8080/api/AddAppointment",{
    method:"POST",
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
   body:JSON.stringify(data)
 
   }).then((result)=>{
     console.log("result",result);
   })
   .catch((res)=>{
     
     console.log("errorrrrrrr");
   })
  }
   
  return (
    <ScrollView>
      <View>
        <Text style={style.text}>Appointment Details</Text>
        </View>

      <View style={{marginTop: 30}}>
      <Divider width={5}/>
        <TextInput
          label=" Appointment Title"
          placeholder="Appointment Title"
          onChangeText={i => SetTitle(i)}></TextInput>
        <TextInput
          label="First Name"
          placeholder="First Name"
          onChangeText={i => setFirstName(i)}></TextInput>
        <TextInput
        placeholder="Last Name"
          label="PlaceHolder"
          onChangeText={i => setLastName(i)}></TextInput>
          
          <View>
          <Picker
        selectedValue={AppointmentType}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setAppointmentType(itemValue) }>
        <Picker.Item label="Appointment Type 1" value="Appointment Type 1" />
        <Picker.Item label="Appointment Type 2" value="Appointment Type 2" />
      </Picker>
          </View>
          <View>
          <Picker
        selectedValue={AppointmentChannel}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setAppointmentChannel(itemValue) }>
        <Picker.Item label="Ap Channal 1" value="1" />
        <Picker.Item label="Ap Channal 2" value="2" />
      </Picker>
          </View>


      </View>

      <View >
        <View>
          <TextInput label="Doctor_Id"placeholder="Doctor_Id" value={DoctorId}></TextInput>
        </View>
        <View>
          <TextInput label="User_Id" placeholder="User_Id"value={UserId}></TextInput>
        </View>
        <View>
          <TextInput label="Clinc_Id" placeholder="Clinc_Id"value={ClinicId}></TextInput>
        </View>
        
        <Divider width={5}/>
        
        <View>
          <Text style={style.text}>Virtual Information</Text>
        </View>
        <View>
          <TextInput
            label="Blood Pressure"
            placeholder="Blood Pressure"
            onChangeText={i => setPatient_BP(i)}></TextInput>
          <TextInput
            label="Height"
            placeholder="Height"
            onChangeText={i => setPatient_Height(i)}></TextInput>
          <TextInput
            label="SPo2"
            placeholder="SPo2"
            onChangeText={i => setPatient_SPO2(i)}></TextInput>
          <TextInput
          placeholder="Tempreture"
            label="Tempreture"
            onChangeText={i => setPatient_Temp(i)}></TextInput>
          <TextInput
            label="Weight"
            placeholder="Weight"
            onChangeText={i => setPatient_Weight(i)}></TextInput>
          <TextInput
            label="Pluse Rate"
            placeholder="Rate"
            onChangeText={i => setPatient_Plus(i)}></TextInput>
          <TextInput
            label="Address"
            placeholder="Address"
            onChangeText={i => setAddress(i)}></TextInput>
        </View>

        <Divider width={5}/>
        <View>
          <Text style={{fontSize: 25}}>Select Date</Text>

          {/* <DatePicker
            date={AppointmentDate}
            mode="date"
            onDateChange={setAppointmentDate}
          /> */}
        </View>
        <Divider width={5}/>
        <View>
          <Text style={{fontSize: 25, marginTop: 5}}>Select Time</Text>
          {/* <DatePicker
            date={AppointmentTime}
            mode="time"
            onDateChange={setAppointmentTime}
          /> */}
        </View>
        <Divider width={5}/>
        <View>
          {/* <View>
            <TextInput label="Booked date" value={BookedDate}></TextInput>
          </View> */}
          <TextInput
            multiline={true}
            numberOfLines={5}
            label="Reason"
            placeholder="Reason"
            onChangeText={i => setShortNote(i)}></TextInput>
          <TextInput
            multiline={true}
            placeholder="Note For Doctor"
            numberOfLines={5}
            label="Note For Doctor"
            onChangeText={i => setPrescriptionNote(i)}></TextInput>
        </View>

        <View style={{marginHorizontal: 50, borderRadius: 10}}>
          <Button title="Book" onPress={saveUser}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default App;


// {"Title":"skdjfk","AppointmentTime":"07:49","AppointmentChannel":"2","AppointmentType":"Type-2","AppointmentStatus":"active","FirstName":"kjskdfjk","LastName":"sdkjfk","BookedDate":"2022-03-20","Address":"djfkdj","City":"","State":"","pincode":"","country":"","Patient_BP":"djfkdjf","Patient_Plus":"kdjfkjds","Patient_SPO2":"ksdjfkjds","Patient_Temp":"sdkjfkj","Patient_Weight":"dskjfkjs","Patient_Height":"kdjskfjs","PrescriptionNote":"ksjdfkj","UserId":"810459219","ClinicId":"122990548","DoctorId":"45346070"}

// {"Title": "Gxhcg",
// "AppointmentDate": "2025-01-18",
// "AppointmentTime": "52:00",
// "AppointmentChannel": "1", 
// "AppointmentType": "Appointment Type 2",
// "AppointmentStatus": "Active",

// "FirstName": "Hchchcgxx",
// "LastName": "Txtztxt",
// "BookedDate": "12-12-112",
// "Address": "Ycyc",

// "City":"",
// "State":"",
// "pincode":"",
// "country":"",

// "Patient_BP": "Hcycy", 
// "Patient_Plus": "Yfycy",
// "Patient_SPO2": "Ycyfy",
// "Patient_Temp": "Ycyc",
// "Patient_Weight": "Ycycy",
// "Patient_Height": "Gycycyg",

// "ShortNote": "Yxtxyc",
// "PrescriptionNote": "Tctcyctctc",
// "UserId": "234345",
// "ClinicId":"122990548",
// "DoctorId": "233433454"}


// //Working
// {"Title":"ksdjf",
// "AppointmentDate":"2022-03-10",
// "AppointmentTime":"21:42",
// "AppointmentChannel":"1",
// "AppointmentType":"Type-1",
// "AppointmentStatus":"active",

// "FirstName":"ksdjfk",
// "LastName":"ksdjfk",
// "BookedDate":"2022-03-11",
// "Address":"",
// "City":"",
// "State":"",
// "pincode":"",
// "country":"",

// "Patient_BP":"ksdjf",
// "Patient_Plus":"kdjfk",
// "Patient_SPO2":"ksjdfkj",
// "Patient_Temp":"kjsdfk",
// "Patient_Weight":"kjfsdk",
// "Patient_Height":"skdjfk",

// "ShortNote":"kdsjfk",
// "PrescriptionNote":"djfk",
// "UserId":"810459219",
// "ClinicId":"122990548",
// "DoctorId":"45346070"}