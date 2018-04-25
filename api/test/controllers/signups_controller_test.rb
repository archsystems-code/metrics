require 'test_helper'

class SignupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @signup = signups(:one)
  end

  test "should get index" do
    get signups_url, as: :json
    assert_response :success
  end

  test "should create signup" do
    assert_difference('Signup.count') do
      post signups_url, params: { signup: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show signup" do
    get signup_url(@signup), as: :json
    assert_response :success
  end

  test "should update signup" do
    patch signup_url(@signup), params: { signup: {  } }, as: :json
    assert_response 200
  end

  test "should destroy signup" do
    assert_difference('Signup.count', -1) do
      delete signup_url(@signup), as: :json
    end

    assert_response 204
  end
end
